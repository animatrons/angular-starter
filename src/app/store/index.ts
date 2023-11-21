import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as fromTheme from './reducers/theme.reducer';

export const stateFeatureKey = 'state';

export interface State {

  [fromTheme.themeFeatureKey]: fromTheme.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromTheme.themeFeatureKey]: fromTheme.reducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
