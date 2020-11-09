import { RouterState } from './router.reduce';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
const selectRouterReducerState = createFeatureSelector<RouterReducerState<RouterState>>('router');

export const selectRouterState = createSelector(
  selectRouterReducerState,
  (routerReducerState: RouterReducerState<RouterState>) => (routerReducerState && routerReducerState.state) || {},
);

export const selectRouterQueryParams = createSelector(
  selectRouterState,
  (routerState: RouterState) => (routerState && routerState.queryParams) || {},
);