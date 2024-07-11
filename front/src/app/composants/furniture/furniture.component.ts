import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FurnitureService } from '../../services/furniture.service';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.scss',
  providers: [FurnitureService]
})
export class FurnitureComponent implements OnInit {
  furnitures: any[] = [];
  totalQuantity: number = 0;
  materialUsage: { [materialId: string]: number } = {};
  materialUsageInEtageres: { [materialId: string]: number } = {};
  

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.getAllFurnitures();
    this.calculateTotalQuantity();
    this.calculateMaterialUsageInArmoires();
    this.calculateMaterialUsageInEtageres();
  }

  getAllFurnitures(): void {
    this.furnitureService.getFurnitures().subscribe((data: any[]) => {
      this.furnitures = data;
      this.calculateTotalQuantity();
    });
  }

  getArmoires(): void {
    this.furnitureService.getArmoires().subscribe((data: any[]) => {
      this.furnitures = data;
      this.calculateTotalQuantity();
    });
  }

  getEtageres(): void {
    this.furnitureService.getEtageres().subscribe((data: any[]) => {
      this.furnitures = data;
      this.calculateTotalQuantity();
    });
  }

  calculateTotalQuantity(): void {
    this.totalQuantity = this.furnitures.reduce((total, furniture) => total + (furniture.quantity || 0), 0);
  }

  calculateMaterialUsageInArmoires(): void {
    this.furnitureService.getMaterialUsageInArmoires().subscribe((data: { [materialId: string]: number }) => {
      this.materialUsage = data;
    });
  }

  calculateMaterialUsageInEtageres(): void {
    this.furnitureService.getMaterialUsageInEtageres().subscribe((data: { [materialId: string]: number }) => {
      this.materialUsageInEtageres = data;
    });
  }
}


