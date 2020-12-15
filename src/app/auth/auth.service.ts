import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.interface';
import { baseUrl } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(login: Login) {
    return this.http.post(`${baseUrl}auth/client/login`, login).subscribe(
      (sucess: any) => {
        localStorage.setItem('Token', sucess.token);
        localStorage.setItem('Payload', JSON.stringify(sucess.payload));
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  logout() {
    const token = localStorage.removeItem('Token');
    const payload = localStorage.removeItem('Payload');

    if (token === null && payload === null) {
      this.router.navigate(['/']);
      return false;
    }
  }

  get getToken() {
    return localStorage.getItem('Token');
  }
  get getPayloadData(): any {
    return JSON.parse(localStorage.getItem('Payload'));
  }
  get isLogedIn(): boolean {
    const token = this.getToken;
    return token !== null ? true : false;
  }
}
