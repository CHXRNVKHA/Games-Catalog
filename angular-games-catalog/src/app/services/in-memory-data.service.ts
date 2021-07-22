import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  public createDb() {
    const games = [
      { id: 11, name: 'Uncharted',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
    ];
    return {games};
  }

  public genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 11;
  }
}
