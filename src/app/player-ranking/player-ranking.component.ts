import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.css']
})
export class PlayerRankingComponent implements OnInit {

  players: Player[];
  isAdmin: boolean;

  constructor(private playerService: PlayerService, private authService: AuthService) { }

  ngOnInit() {
    this.getPlayers();
    this.isAdmin = this.authService.adminLogin;
  }

  getPlayers(): void{
    this.players = this.playerService.getPlayers();
  }

}
