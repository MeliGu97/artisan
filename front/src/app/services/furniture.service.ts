import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  private apiUrl = 'http://localhost:5000/api/furnitures';

  constructor(private http: HttpClient) { }
  // Méthode pour avoir tous les meubles
  getFurnitures(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Méthode pour avoir uniquement les armoires
  getArmoires(): Observable<any[]> {
    return this.getFurnitures().pipe(
      map((furnitures: any[]) => furnitures.filter(furniture => furniture.category === 'armoire'))
    );
  }

  // Méthode pour avoir uniquement les étagères
  getEtageres(): Observable<any[]> {
    return this.getFurnitures().pipe(
      map((furnitures: any[]) => furnitures.filter(furniture => furniture.category === 'etagere'))
    );
  }


  // Méthode pour calculer la quantité totale de meuble
  getTotalQuantity(): Observable<number> {
    return this.getFurnitures().pipe(
      map((furnitures: any[]) => furnitures.reduce((total, furniture) => total + (furniture.quantity || 0), 0))
    );
  }
  

  // Méthode pour compter les matériaux utilisés dans les armoires
  getMaterialUsageInArmoires(): Observable<{ [materialId: string]: number }> {
    return this.getArmoires().pipe(
      map((armoires: any[]) => {
        const materialCount: { [materialId: string]: number } = {};

        armoires.forEach(armoire => {
          armoire.materialsId.forEach((material: { _id: string | number; }) => {
            if (materialCount[material._id]) {
              materialCount[material._id]++;
            } else {
              materialCount[material._id] = 1;
            }
          });
        });

        return materialCount;
      })
    );
  }


  // Méthode pour compter les matériaux utilisés dans les étagères
  getMaterialUsageInEtageres(): Observable<{ [materialId: string]: number }> {
    return this.getEtageres().pipe(
      map((etageres: any[]) => {
        const materialCount: { [materialId: string]: number } = {};

        etageres.forEach(etagere => {
          etagere.materialsId.forEach((material: { _id: string | number; }) => {
            if (materialCount[material._id]) {
              materialCount[material._id]++;
            } else {
              materialCount[material._id] = 1;
            }
          });
        });

        return materialCount;
      })
    );
  }
}