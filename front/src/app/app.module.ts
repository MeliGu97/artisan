// logiquement ne sert à rien car app.component.ts est en standlone:true => plus besoin de module
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GraphBarreComponent } from './composants/graph-barre/graph-barre.component';
import { FurnitureService } from "./services/furniture.service";
import { MaterialService } from './services/material.service';
import { AppRoutesModule } from './app.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppModule,
    RouterModule,
    HttpClientModule,
    AppRoutesModule,
    
  ],
  providers: [
    FurnitureService,
    MaterialService,
    GraphBarreComponent,
  ],

})
export class AppModule { }
