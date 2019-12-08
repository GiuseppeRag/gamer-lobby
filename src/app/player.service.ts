import { Injectable } from '@angular/core';
import { Player } from './player';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  endpoint = 'https://agile-depths-backend-93036.herokuapp.com/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  GetPlayers() {
    return this.http.get(`${this.endpoint}/get-player`);
  }

  AddPlayer(data: Player): Observable<any> {
    const API_URL = `${this.endpoint}/add-player`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(catchError(val => of(`Caught: ${val}`)))
      );
  }

  GetPlayer(id): Observable<any> {
    const API_URL = `${this.endpoint}/get-player/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(catchError(val => of(`Caught: ${val}`)))
    );
  }

  UpdatePlayer(id, data: Player): Observable<any> {
    const API_URL = `${this.endpoint}/update-player/${id}`;


    return this.http.put(API_URL, data, { headers: this.headers }).pipe(
      map((res: Response) => {
        return true;
      }),
      catchError(catchError(val => of(`Caught: ${val}`)))
    );
  }

  DeletePlayer(id): Observable<any> {
    const API_URL = `${this.endpoint}/delete-player/${id}`;
    return this.http.delete(API_URL).pipe(
      catchError(catchError(val => of(`Caught: ${val}`)))
    );
  }


}
