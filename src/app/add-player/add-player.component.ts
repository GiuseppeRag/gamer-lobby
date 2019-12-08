import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game';
import { PlayerService}  from '../player.service';
import { Player } from '../player';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player: String
  rank: number;
  score: number;
  timePlayed: String
  favouriteGame: String
  status: String

  playerError: String
  rankError: String
  scoreError: String
  timePlayedError: String
  favouriteGameError: String
  statusError: String

  ranks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  games: any = [];

  constructor(private location: Location, private router: Router, private gameService: GameService, private playerService: PlayerService) { }

  ngOnInit() {
    this.getGames();
    this.playerError = ""
    this.rankError = ""
    this.scoreError = ""
    this.timePlayedError = ""
    this.favouriteGameError = ""
    this.statusError = ""
  }

  checkPlayer() {
    if (this.player == ""){
      this.playerError = "Player Field is required"
    }
    else {
      this.playerError = ""
    }
  }

  checkScore() {
    if (isNaN(this.score) || this.score.toString() == "" || this.score < 0){
      this.scoreError = "Score must be a positive number"
    }
    else {
      this.scoreError = ""
    }
  }

  checkTimePlayed() {
    if (this.timePlayed == ""){
      this.timePlayedError = "Time Played Field is required"
    }
    else {
      this.timePlayedError = ""
    }
  }

  onAdd(f: NgForm) {
    if (f.valid){
      this.checkPlayer()
      this.checkScore()
      this.checkTimePlayed()

      if (this.rank == null){
        this.rankError = "Rank is required"
      }
      else {
        this.rankError = ""
      }

      if (this.favouriteGame == null){
        this.favouriteGameError = "Favourite Game is Required"
      }
      else {
        this.favouriteGameError = ""
      }

      if (this.status == null){
        this.statusError = "Status is required"
      }
      else {
        this.statusError = ""
      }

      if (this.playerError == "" && this.rankError == "" && this.scoreError == "" && this.timePlayedError == "" && this.favouriteGameError == "" && this.statusError == ""){
        let newPlayer: Player = {name: this.player, rank: this.rank, score: this.score, time_played: this.timePlayed, game_played: this.favouriteGame, status: this.status}
        this.playerService.AddPlayer(newPlayer).subscribe()
        this.onBack()
      }
    }
  }

  onBack() {
    this.location.back();
  }

  getGames() {
    this.gameService.GetGames().subscribe(data => this.games = data)
  }

}
