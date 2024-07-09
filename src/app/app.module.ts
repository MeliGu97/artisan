import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutesModule } from './app.routes';
import { RouterModule } from '@angular/router'

import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { MaterialComponent } from './composants/material/material.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    RouterModule
  ],
  providers: [
    ApiService,
    provideHttpClient() 
  ],

})
export class AppModule { }
