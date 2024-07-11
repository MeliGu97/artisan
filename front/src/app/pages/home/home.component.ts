import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialComponent } from '../../composants/material/material.component';
import { MenuComponent } from '../../composants/menu/menu.component';
import { FurnitureComponent } from '../../composants/furniture/furniture.component';
import { GraphBarreComponent } from '../../composants/graph-barre/graph-barre.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MaterialComponent, MenuComponent, FurnitureComponent, GraphBarreComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
