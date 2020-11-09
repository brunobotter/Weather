import { Store } from '@ngrx/store';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromHomeActions from './home.actions';
import { WheatherService } from 'src/app/shared/services/wheather.service';

@Injectable()
export class HomeEffects{

   loadCurrentWeather$ = createEffect(() => this.action$
   .pipe(
       ofType(fromHomeActions.loadCurrentWeather),
       mergeMap(({query}) => this.weatherService.getCityWeatherByQuery(query)),
       catchError((err, caughts) => {
        this.store.dispatch(fromHomeActions.loadCurrentWeatherFailed());
        return caughts;
       }),
       map((entity:any) => fromHomeActions.loadCurrentWeatherSucess({entity})),
   ),
   )
    constructor(private action$: Actions,
        private store: Store,
        private weatherService: WheatherService){}
}