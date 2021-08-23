import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Game } from '../models/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit {
  public games$: Observable<Game[]>;
  public games: Game[];
  public gamesSubscribe: Subscription;
  public limit = 8; 

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  public getGames(): void {
    this.gameService.getGames().subscribe(games => this.games = games);
  }

  public incrementLimit(): void {
    this.limit += 4;
  }
}
