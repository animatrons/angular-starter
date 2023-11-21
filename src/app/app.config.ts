import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { StoreModule } from "@ngrx/store";
import { metaReducers, reducers } from "./store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { ThemeEffects } from "./store/effects/theme.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      StoreModule.forRoot(reducers, {metaReducers}),
      EffectsModule.forRoot([ThemeEffects]),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes)
  ]
}
