import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Game } from '../models/game';
import { GameService } from '../services/game.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  public game: Game;
  public subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getGame();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getGame(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.subscription = this.gameService.getGame(id)
      .subscribe(game => this.game = game);
  }

  public goBack(): void {
    this.location.back();
  }
}
