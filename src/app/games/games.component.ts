import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';

import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: any = []
  @Input() searchText: String

  constructor(
    private authService: AuthService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.gameService.GetGames().subscribe(data => this.games = data);
  }

}
