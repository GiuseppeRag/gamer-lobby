import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';
import { Game } from '../game';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  player: String
  rank: number
  score: number
  timePlayed: String
  favouriteGame: String
  status: String
  id: number

  ranks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  games: Game[]

  constructor(private route: ActivatedRoute, private location: Location, private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.getGames();
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  getGames(){
    this.games = this.gameService.getGames();
  }

  onUpdate(){
    if (this.player != "" && this.rank > 0 && this.score > 0 && this.timePlayed != "" && this.favouriteGame != "" && this.status != ""){
      this.router.navigateByUrl('/home');
    }
  }

  onBack(){
    this.location.back();
  }

}
