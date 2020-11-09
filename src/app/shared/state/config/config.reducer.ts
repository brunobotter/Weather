import { Units } from 'src/app/shared/models/units.enum';
import { createReducer, on } from '@ngrx/store';
import * as fromConfigActions from './config.actions';

export interface ConfigState {
  unit: Units;
}

export const configInitialState: ConfigState = {
  unit: Units.Metric,
}

export const configReducer = createReducer(
  configInitialState,
  on(fromConfigActions.updateUnit, (state, { unit }) => ({
    ...state,
    unit,
  })),
);