import { Injectable } from '@angular/core';
import { Game } from './game';
import { GAMES } from './mock-games';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(): Game[] {
    return GAMES;
  }
}
