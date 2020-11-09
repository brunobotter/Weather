import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { createAction, props } from '@ngrx/store';

//action para quando clicar botao de pesquisar
export const loadCurrentWeather = createAction(
    '[Home] Load Current Weather',
    props<{query: string}>(),
)

//tem props por que e algo que quero guardar e retornar
export const loadCurrentWeatherSucess = createAction(
    '[Weather API] Load Current Weather Sucess',
    props<{entity: any}>(),
);

//nao tem propos por que e algo nao ha necessidade de  guardar o error
export const loadCurrentWeatherFailed = createAction(
    '[Weather API] Load Current Weather Failed',
);


export const toggleBookmark = createAction(
    '[Home] Toggle Bookmark',
    props<{entity: Bookmark}>(),
);

export const clearHomeState = createAction(
    '[Home] Clear Home State'
    );


