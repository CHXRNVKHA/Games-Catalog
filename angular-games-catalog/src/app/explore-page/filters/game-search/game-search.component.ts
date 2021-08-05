import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, find } from 'rxjs/operators';

import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  public games$: Observable<Game[]>;
  public games: Game[];
  public gamesSubscribe: Subscription;
  private searchTerms = new Subject<string>();

  constructor(
    private gameService: GameService,
    private router: Router) { }

  public search (term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.games$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.gameService.searchGames(term)),
    );
    this.gamesSubscribe = this.gameService.getGames().subscribe(games => this.games = games);
  }

  ngOnDestroy(): void {
    this.gamesSubscribe.unsubscribe();
  }

  public openGameDetail(gameId: number): void {
    this.router.navigateByUrl(`/detail/${gameId}`);
  }

  public findGame(gameName: string): void {
    const game = this.games.find(game => game.name.toLowerCase() === gameName.toLowerCase());
    this.router.navigateByUrl(`/detail/${game?.id}`);
  }
}
