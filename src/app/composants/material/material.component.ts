import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  providers: [MaterialService]
})
export class MaterialComponent implements OnInit {
  materials: any[] = [];

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {
    this.materialService.getMaterials().subscribe(data => {
      this.materials = data;
    });
  }
}
