import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ThemeActions } from '../actions/theme.actions';
import { ThemeService } from 'src/app/shared/utils/theme.service';
import { LocalStorageService } from 'src/app/shared/utils/local-storage.service';

@Injectable()
export class ThemeEffects {

  initTheme$ = createEffect(() => this.actions$.pipe(
    ofType(ThemeActions.initTheme),
    concatMap(() => {
      if (this.localStorage.getItem('darkMode')) {
        return of(ThemeActions.enableDarkMode());
      } else {
        return of(ThemeActions.disableDarkMode());
      }
    })
  ));

  enableDarkMode$ = createEffect(() => this.actions$.pipe(
    ofType(ThemeActions.enableDarkMode),
    tap(() => this.localStorage.setItem('darkMode', true)),
    concatMap(() => of(this.themeService.toggleDarkMode(true)))
  ), {dispatch: false});

  disableDarkMode$ = createEffect(() => this.actions$.pipe(
    ofType(ThemeActions.disableDarkMode),
    tap(() => this.localStorage.setItem('darkMode', false)),
    concatMap(() => of(this.themeService.toggleDarkMode(false)))
  ), {dispatch: false});

  constructor(private actions$: Actions, private themeService: ThemeService, private localStorage: LocalStorageService) {}

}
