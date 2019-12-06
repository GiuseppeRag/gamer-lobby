import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';
import { Game } from '../game';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  selectedPlayer: any

  player: String
  rank: number
  score: number
  timePlayed: String
  favouriteGame: String
  status: String

  ranks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  games: Game[]

  constructor(private route: ActivatedRoute, private location: Location, private gameService: GameService, private router: Router, private playerService: PlayerService) { 
    var id = this.route.snapshot.paramMap.get('id');
    this.playerService.GetPlayer(id).subscribe(data => {
      this.selectedPlayer = data
    });
  }

  ngOnInit() {
    this.getGames();

    this.player = this.selectedPlayer.name;
    this.rank = this.selectedPlayer.rank;
    this.score = this.selectedPlayer.score;
    this.timePlayed = this.selectedPlayer.time_played;
    this.favouriteGame = this.selectedPlayer.game_played;
    this.status = this.selectedPlayer.status;
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
    this.router.navigateByUrl('/home')
  }

}
