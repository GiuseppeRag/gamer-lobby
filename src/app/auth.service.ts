import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = 'http://localhost:4000/api';
  adminLogin: boolean;

  GetUser() {
    return this.http.get(`${this.endpoint}/get-users`);
  }

  Login() {
    this.adminLogin = true;
    sessionStorage.setItem('isLoggedIn', '' + this.adminLogin);
  }

  Logout() {
    this.adminLogin = false;
    sessionStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return (sessionStorage.getItem('isLoggedIn') === 'true');
  }

  constructor(private http: HttpClient) {
    this.adminLogin = false;
  }
}
