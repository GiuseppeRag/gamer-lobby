import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player: String
  rank: number;
  score: number
  timePlayed: String
  favouriteGame: String
  status: String

  ranks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  games: Game[];

  constructor(private location: Location, private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }
T
  onAdd() {
    if (this.player !== "" && this.rank > 0 && this.score > 0 && this.timePlayed != "" && this.favouriteGame != "" && this.status != ""){
      this.router.navigateByUrl('/home');
    }
  }

  onBack() {
    this.location.back();
  }

  getGames() {
    this.games = this.gameService.getGames();
  }

}
