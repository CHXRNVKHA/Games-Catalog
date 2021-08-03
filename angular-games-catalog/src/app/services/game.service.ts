import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Game } from '../models/game';
import { environment } from 'src/environments/environment';
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamesUrl = 'api/games';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  public getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`;
    return this.http.get<Game>(url).pipe(
      
    );
  }

  public searchGames(term: string): Observable<Game[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Game[]>(`${this.gamesUrl}/?name=${term}`).pipe(
      tap()
    );
  }
}
