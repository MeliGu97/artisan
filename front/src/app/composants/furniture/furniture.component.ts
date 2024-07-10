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

  constructor(
    private furnitureService: FurnitureService
  ){}
  ngOnInit(): void {
    this.furnitureService.getFurnitures().subscribe(data => {
      this.furnitures = data;
    });
    console.log("this.furnitures : ", this.furnitures)
  }

}
