import { CityDailyWeather } from 'src/app/shared/models/weather.model';
import { createAction, props } from '@ngrx/store';
export const loadWeatherDetails = createAction('[Details] Load Weather Details');

export const loadWeatherDetailsSuccess = createAction(
  '[Details] Load Weather Details Success',
  props<{ entity: CityDailyWeather }>(),
);

export const loadWeatherDetailsFailed = createAction('[Details] Load Weather Details Failed');
