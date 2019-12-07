import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm, NgModel } from '@angular/forms';

import { Game } from '../game';
import { GameService } from '../game.service';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-join-player',
  templateUrl: './join-player.component.html',
  styleUrls: ['./join-player.component.css']
})
export class JoinPlayerComponent implements OnInit {

  games: any = [];
  player: Player;
  value: String;
  selectedGame: Game;
  errorMessage: String;
  id: any

  constructor(
    private route: ActivatedRoute, 
    private location: Location, 
    private gameService: GameService,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.getGames();
    this.id = this.route.snapshot.paramMap.get('id');
    this.playerService.GetPlayer(this.id).subscribe(data => {
      this.player = data;
    });
  }

  getGames(){
    this.gameService.GetGames().subscribe(data => this.games = data);
  }

  onBack(){
    console.log("Back Called");
    this.location.back();
  }

  onJoin(f: NgForm){
    if (f.valid && this.selectedGame != null) {
      this.player.status = "Unavailiable";
      this.playerService.UpdatePlayer(this.id, this.player).subscribe()

      this.onBack();
    }
    else {
      this.errorMessage = 'A Game must be selected';
    }
  }
}
