import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {GameService} from '../game.service';
import {NgForm} from '@angular/forms';
import {Game} from '../game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  title: string;
  platform: string;
  genre: string;
  rating: string;
  publisher: string;
  release: number;
  status: string;

  titleError: string;
  platformError: string;
  genreError: string;
  ratingError: string;
  publisherError: string;
  releaseError: string;
  statusError: string;

  constructor(private location: Location, private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.title = '';
    this.platform = '';
    this.genre = '';
    this.rating = '';
    this.publisher = '';
    this.status = '';
  }

  onBack() {
    this.location.back();
  }

  checkTitle() {
    if (this.title === '') {
      this.titleError = 'This field is required';
      return false;
    } else {
      this.titleError = '';
      return true;
    }
  }

  checkPlatform() {
    if (this.platform === '') {
      this.platformError = 'This field is required';
      return false;
    } else {
      this.platformError = '';
      return true;
    }
  }

  checkGenre() {
    if (this.genre === '') {
      this.genreError = 'This field is required';
      return false;
    } else {
      this.genreError = '';
      return true;
    }
  }

  checkRating() {
    if (this.rating === '') {
      this.ratingError = 'This field is required';
      return false;
    } else {
      this.ratingError = '';
      return true;
    }
  }

  checkPublisher() {
    if (this.publisher === '') {
      this.publisherError = 'This field is required';
      return false;
    } else {
      this.publisherError = '';
      return true;
    }
  }

  checkRelease() {
    if (isNaN(this.release) || this.release.toString() === '' || this.release < 0) {
      this.releaseError = 'Release must be a positive number';
      return false;
    } else {
      this.releaseError = '';
      return true;
    }
  }

  checkStatus() {
    if (this.status === null) {
      this.statusError = 'This field is required';
      return false;
    } else {
      this.statusError = '';
      return true;
    }
  }

  verify() {
    return (this.checkTitle() && this.checkPlatform() && this.checkGenre() && this.checkRating()
      && this.checkPublisher() && this.checkRelease() && this.checkStatus());
  }

    onAdd(f: NgForm) {

    if (this.verify()) {
      const newGame: Game = {
        title: this.title,
        platform: this.platform,
        genre: this.genre,
        rating: this.rating,
        publisher: this.publisher,
        release: this.release,
        status: this.status
      };
      this.gameService.AddGame(newGame).subscribe();
      this.onBack();
    }
  }

}
