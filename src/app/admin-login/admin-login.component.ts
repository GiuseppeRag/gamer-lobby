import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  userData: any = []
  username: String;
  password: String;
  errors: String[];

  constructor(
    private authService: AuthService, 
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.authService.GetUser().subscribe(data => this.userData = data)
    console.log(this.userData)
  }

  Login(f: NgForm){
    this.errors = [];
    if (f.valid){
      console.log(this.userData.username)

      if (this.username == this.userData[0].username && this.password == this.userData[0].password) {
        this.authService.Login();
        this.router.navigateByUrl('/home');
      }
      else {
        this.errors.push("Invalid Credentials");
      }
    }
    else {
        if (this.username == "" || this.username == null){
          this.errors.push("Username cannot be left blank");
        }
        if (this.password == "" || this.password == null){
          this.errors.push("Password cannot be left blank");
        }
    }
  }

  onBack(){
    this.location.back();
  }

}
