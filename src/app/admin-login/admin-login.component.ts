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

  username: String;
  password: String;
  errorMessage: String;

  constructor(
    private authService: AuthService, 
    private location: Location,
    private router: Router) { }

  ngOnInit() {
  }

  Login(f: NgForm){
    if (f.valid){
      if (this.username == "username" && this.password == "password") {
        this.authService.Login();
        this.router.navigateByUrl('/home');
      }
      else {
        this.errorMessage = "Invalid Credentials Provided";
      }
    }
    else {
      this.errorMessage = "Form Invalid";
    }
  }

  onBack(){
    this.location.back();
  }

}
