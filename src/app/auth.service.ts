import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  adminLogin: boolean;

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

  constructor() {
    this.adminLogin = false;
  }
}
