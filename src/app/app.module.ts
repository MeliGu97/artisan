import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutesModule } from './app.routes';
import { RouterModule } from '@angular/router'

import { ApiService } from './api.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule,
    RouterModule
  ],
  providers: [
    ApiService
  ],

})
export class AppModule { }
