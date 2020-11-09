import { AppState } from 'src/app/shared/state/app.reducer';
import { Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { mergeMap, catchError,  map, withLatestFrom } from 'rxjs/operators';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { WheatherService } from 'src/app/shared/services/wheather.service';
import * as fromDetailsActions from './details.actions';
import * as fromRouterSelectors from '../../../shared/state/router/router.selectors';


@Injectable()
export class DetailsEffects {

  loadCurrentWeather$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromDetailsActions.loadWeatherDetails),
      withLatestFrom(this.store.pipe(select(fromRouterSelectors.selectRouterQueryParams))),
      mergeMap(([, queryParams]: [any, Params]) =>
        combineLatest([
          this.weatherService.getCityWeatherByCoord(queryParams.lat, queryParams.lon),
          this.weatherService.getWeatherDetails(queryParams.lat, queryParams.lon),
        ])
      ),
      catchError((err, caught$) => {
        this.store.dispatch(fromDetailsActions.loadWeatherDetailsFailed());
        return caught$;
      }),
      map(([current, daily]) => {
        const entity = daily;
        entity.city = {...current.city, timeZone: daily.city.timeZone};
        return fromDetailsActions.loadWeatherDetailsSuccess({ entity });
      }),
    )
  );

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private weatherService: WheatherService) {
  }
}
