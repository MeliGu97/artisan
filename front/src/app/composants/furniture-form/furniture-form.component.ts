import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, FormArray, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FurnitureService } from '../../services/furniture.service';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-furniture-form',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './furniture-form.component.html',
  styleUrl: './furniture-form.component.scss',
  providers: [FurnitureService, MaterialService]
})
export class FurnitureFormComponent implements OnInit {
  furniture: any = [];
  newFurnitureForm: FormGroup = new FormGroup({});
  newFurniture: any = {};
  materials: any;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private furnitureService: FurnitureService,
    private materialService: MaterialService
  ) { }

  ngOnInit(): void {
    this.newFurnitureForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      materialsId: this.formBuilder.array([]),
      quantity: [0]
    });

    this.furnitureService.getFurnitures().subscribe((data) => {
      this.furniture = data;
    });

    this.materialService.getMaterials().subscribe((data) => {
      this.materials = data;
      const materialsArray: FormArray = this.newFurnitureForm.get('materialsId') as FormArray;
  
      if (this.data.isUpdate) {
        this.newFurnitureForm.patchValue(this.data.furniture);
  
        this.materials.forEach((material: any) => {
          const isChecked = this.data.furniture.materialsId.some((material: any) => material._id === material._id);
          materialsArray.push(new FormControl(isChecked ? material._id : false));
        });
      } else {
        this.materials.forEach(() => {
          materialsArray.push(new FormControl(false));
        });
      }
    });
  }

  onCheckboxChange(e: any) {
    const materialsArray: FormArray = this.newFurnitureForm.get('materialsId') as FormArray;

    if (e.target.checked) {
      materialsArray.push(new FormControl(e.target.value));
    } else {
      const index = materialsArray.controls.findIndex(x => x.value === e.target.value);
      materialsArray.removeAt(index);
    }
  }

  onSubmit(): void {
    // this.furnitureService.addFurniture(this.newFurnitureForm.value).subscribe(() => {
    //   this.furnitureService.getFurnitures()
    //   this.newFurnitureForm.reset();
    // });
    this.furnitureService.addFurniture(this.newFurnitureForm.value).subscribe({
      next: (createFurniture) => {
        console.log('furniture ajoutée avec succès', createFurniture);
        this.furniture.push(createFurniture);
        this.newFurnitureForm.reset();
        (this.newFurnitureForm.get('materialsId') as FormArray).clear();
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout d'une furniture", error);
      }
    });
  }
}