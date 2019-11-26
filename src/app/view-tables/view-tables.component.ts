import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-tables',
  templateUrl: './view-tables.component.html',
  styleUrls: ['./view-tables.component.css']
})
export class ViewTablesComponent implements OnInit {

  isAdmin: boolean
  table: String;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin = this.authService.adminLogin;
    this.table = 'players';
  }

  changeTable(table: String){
    if (this.isAdmin && table == 'games')
      this.table = 'games'
    else if (table == 'players')
      this.table = 'players'
  }
}
