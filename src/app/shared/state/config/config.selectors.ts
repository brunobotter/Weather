import { ConfigState } from './config.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const selectConfigState = createFeatureSelector('config');

export const selectUnitConfig = createSelector(
  selectConfigState,
  (configState: ConfigState) => configState.unit,
);