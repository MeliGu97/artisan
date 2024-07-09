import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from '../../composants/material/material.component';
import { MenuComponent } from '../../composants/menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MaterialComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
