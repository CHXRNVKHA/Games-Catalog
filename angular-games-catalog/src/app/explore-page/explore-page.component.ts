import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Game } from '../models/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit {
  public games$: Observable<Game[]>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGames();
  }

  public getGames(): void {
    this.games$ = this.gameService.getGames();
  }
}
