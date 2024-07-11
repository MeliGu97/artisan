import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
import { provideCharts } from 'ng2-charts';

import { routes } from './app.routes'


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(),
    provideCharts()
  ]
}
