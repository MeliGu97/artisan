import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'http://localhost:5000/api/users';

    private token: string | null = null;

    constructor(private http: HttpClient, private router: Router) {}

    login(username: string, password: string): Observable<any> {
        return this.http.post<{ token: string }>(this.apiUrl + '/login', { username, password })
            .pipe(
                tap(response => {
                    this.token = response.token;
                    localStorage.setItem('token', this.token);
                    this.router.navigate(['/home']);
                }),
                catchError(error => {
                    return throwError(() => new Error(error.error.message || 'An error occurred'));
                })
            );
    }


  register(username: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(this.apiUrl + '/register', { username, password })
        .pipe(
            tap(response => {
                this.token = response.token;
                localStorage.setItem('token', this.token);
                this.router.navigate(['/home']);
            }),
            catchError(error => {
                return throwError(() => new Error(error.message || 'An error occurred'));
            })
        );
}


    logout() {
        this.token = null;
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }

    getToken() {
        return this.token;
    }

    isLoggedIn() {
        return !!this.token;
    }
}
