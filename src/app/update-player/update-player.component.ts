import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../game.service';
import { Game } from '../game';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { NgForm } from '@angular/forms';

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
  id: any

  playerError: String
  rankError: String
  scoreError: String
  timePlayedError: String
  favouriteGameError: String
  statusError: String

  ranks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  games: any = []

  constructor(private route: ActivatedRoute, private location: Location, private gameService: GameService, private router: Router, private playerService: PlayerService) { 

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.playerService.GetPlayer(this.id).subscribe(data => {
      this.selectedPlayer = data;

      this.player = this.selectedPlayer.name;
      this.rank = this.selectedPlayer.rank;
      this.score = this.selectedPlayer.score;
      this.timePlayed = this.selectedPlayer.time_played;
      this.favouriteGame = this.selectedPlayer.game_played;
      this.status = this.selectedPlayer.status;
    });

    this.playerError = ""
    this.rankError = ""
    this.scoreError = ""
    this.timePlayedError = ""
    this.favouriteGameError = ""
    this.statusError = ""

    this.getGames();
  }

  getGames(){
    this.gameService.GetGames().subscribe(data => this.games = data);
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

  onUpdate(f: NgForm) {
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
        this.playerService.UpdatePlayer(this.id, newPlayer).subscribe()
        this.onBack()
      }
    }
  }

  onBack(){
    this.location.back()
  }

}
