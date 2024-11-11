

import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {provideRouter, withInMemoryScrolling, withViewTransitions} from '@angular/router';
import { routes } from './app.routes';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha-2';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      RecaptchaV3Module,
    ),
    {provide: RECAPTCHA_V3_SITE_KEY, useValue: "6Lcb9mgqAAAAALONUOfJU5vsizrsnaRAPy1Kr8tN"},
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withInMemoryScrolling({
      anchorScrolling: 'enabled',
      scrollPositionRestoration: "top",
    }),


    
  ),
  {provide:LocationStrategy,useClass:HashLocationStrategy}
  ]
};

