import { createFeature, createReducer, on } from '@ngrx/store';
import { ThemeActions } from '../actions/theme.actions';

export const themeFeatureKey = 'theme';

export interface State {
  darkMode: boolean
}

export const initialState: State = {
  darkMode: false
};

export const reducer = createReducer(
  initialState,
  on(ThemeActions.enableDarkMode, state => ({
    ...state,
    darkMode: true
  })),
  on(ThemeActions.disableDarkMode, state => ({
    ...state,
    darkMode: false
  })),

);

export const themeFeature = createFeature({
  name: themeFeatureKey,
  reducer,
});

