import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.css']
})
export class PlayerRankingComponent implements OnInit {

  players: any = [];
  @Input() isAdmin: boolean;

  constructor(private playerService: PlayerService, private authService: AuthService) { 
    this.playerService.GetPlayers().subscribe(data => {
      this.players = data;
    })
  }

  ngOnInit() {
    //this.getPlayers();
  }

  getPlayers(): void{
    this.playerService.GetPlayers().subscribe(playerData => this.players = playerData);
  }

}
