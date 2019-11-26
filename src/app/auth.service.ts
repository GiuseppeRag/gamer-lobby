import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  adminLogin: boolean

  Login(){
    this.adminLogin = true;
  }

  constructor() { 
    this.adminLogin = false;
  }
}
