import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.css']
})
export class PlayerRankingComponent implements OnInit {

  players: Player[] = [
    {id: 1, name: "DoeJohn82", rank: 1, score: 12345678, playTime: "1D 12H 32M", gamePlayed: "Minecraft", status: "Availiable"},
    {id: 2, name: "MikalyX", rank: 2, score: 1233402, playTime: "1D 7H 3M", gamePlayed: "The Elder Scrolls V: Skyrim", status: "Unavailiable"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
