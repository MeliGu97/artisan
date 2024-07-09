import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from '../../composants/material/material.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MaterialComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
