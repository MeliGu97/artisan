import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getHello(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
}
