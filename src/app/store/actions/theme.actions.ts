import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ThemeActions = createActionGroup({
  source: 'Theme',
  events: {
    'Change Themes': emptyProps(),
    'enableDarkMode': emptyProps(),
    'disableDarkMode': emptyProps(),
    'initTheme': emptyProps(),
  }
});
