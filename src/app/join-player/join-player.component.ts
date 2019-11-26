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

  games: Game[];
  player: Player;
  value: String;
  selectedGame: Game;

  constructor(
    private route: ActivatedRoute, 
    private location: Location, 
    private gameService: GameService,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(){
    this.games = this.gameService.getGames();
  }

  onBack(){
    this.location.back();
  }

  onJoin(){
    if (this.selectedGame != null){
      this.location.back();
    }
  }
}
