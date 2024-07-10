import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  private apiUrl = 'http://localhost:5000/api/furnitures';

  constructor(private http: HttpClient) { }

  getFurnitures(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
