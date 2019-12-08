import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {GameService} from '../game.service';
import {NgForm} from '@angular/forms';
import {Game} from '../game';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {

  prevGame: any;

  title: string;
  platform: string;
  genre: string;
  rating: string;
  publisher: string;
  release: number;
  status: string;
  id: any;

  titleError: string;
  platformError: string;
  genreError: string;
  ratingError: string;
  publisherError: string;
  releaseError: string;
  statusError: string;

  constructor(private route: ActivatedRoute, private location: Location, private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.gameService.GetGame(this.id).subscribe(data => {
      this.prevGame = data;

      this.title = this.prevGame.title;
      this.platform = this.prevGame.platform;
      this.genre = this.prevGame.genre;
      this.rating = this.prevGame.rating;
      this.publisher = this.prevGame.publisher;
      this.release = this.prevGame.release;
      this.status = this.prevGame.status;
    });
    this.titleError = '';
    this.platformError = '';
    this.genreError = '';
    this.ratingError = '';
    this.publisherError = '';
    this.statusError = '';
  }

  checkTitle() {
    if (this.title == '') {
      this.titleError = 'Title Field is required';
      return false;
    } else {
      this.titleError = '';
      return true;
    }
  }

  checkPlatform() {
    if (this.platform == '') {
      this.platformError = 'Platform Field is required';
      return false;
    } else {
      this.platformError = '';
      return true;
    }
  }

  checkGenre() {
    if (this.genre == '') {
      this.genreError = 'Genre Field is required';
      return false;
    } else {
      this.genreError = '';
      return true;
    }
  }

  checkRating() {
    if (this.rating == '') {
      this.ratingError = 'Rating Field is required';
      return false;
    } else {
      this.ratingError = '';
      return true;
    }
  }

  checkPublisher() {
    if (this.publisher == '') {
      this.publisherError = 'Publisher Field is required';
      return false;
    } else {
      this.publisherError = '';
      return true;
    }
  }

  checkRelease() {
    if (isNaN(this.release) || this.release.toString() == '' || this.release < 0) {
      this.releaseError = 'Release must be a positive number';
      return false;
    } else {
      this.releaseError = '';
      return true;
    }
  }

  checkStatus() {
    if (this.status == null) {
      this.statusError = 'Status Field is required';
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

  onUpdate(f: NgForm) {

    if (this.verify() && f.valid) {
      const newGame: Game = {
        title: this.title,
        platform: this.platform,
        genre: this.genre,
        rating: this.rating,
        publisher: this.publisher,
        release: this.release,
        status: this.status
      };
      this.gameService.UpdateGame(this.id, newGame).subscribe();
      this.onBack();
    }
  }

  onBack() {
    this.location.back();
  }

}
