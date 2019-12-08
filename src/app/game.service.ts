import { Injectable } from '@angular/core';
import { Game } from './game';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  endpoint = 'https://agile-depths-backend-93036.herokuapp.com/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  GetGames() {
    return this.http.get(`${this.endpoint}/get-games`);
  }

  AddGame(data: Game): Observable<any> {
    const API_URL = `${this.endpoint}/add-game`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(catchError(val => of(`Caught: ${val}`)))
      );
  }

  GetGame(id): Observable<any> {
    const API_URL = `${this.endpoint}/get-game/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(catchError(val => of(`Caught: ${val}`)))
    );
  }

  UpdateGame(id, data: Game): Observable<any> {
    const API_URL = `${this.endpoint}/update-game/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      catchError(catchError(val => of(`Caught: ${val}`)))
    );
  }

  DeleteGame(id): Observable<any> {
    const API_URL = `${this.endpoint}/delete-game/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(catchError(val => of(`Caught: ${val}`)))
    );
  }
}
