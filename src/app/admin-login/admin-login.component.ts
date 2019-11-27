import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService, 
    private location: Location,
    private router: Router) { }

  ngOnInit() {
  }

  Login(){
    console.log(this.username);
    console.log(this.password);
    if (this.username == "username" && this.password == "password"){
      this.authService.Login();
      this.router.navigateByUrl('/home');
    }
  }

  onBack(){
    this.location.back();
  }

}
