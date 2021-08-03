import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  public createDb() {
    const games = [
      { id: 11, name: 'Uncharted ',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted1',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted2',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted3',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted4',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted5',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted6',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
      { id: 11, name: 'Uncharted7',  date:'2016 May 10', rating: 94.4, desctiption: 'desc', imageUrl: '.../../../assets/images/Uncharted_4_cover.jpg'},
    ];
    const users = [
      { id: 1, userName: 'testUser1', email: 'test@gmail1.com', password: 'test' },
      { id: 2, userName: 'testUser2', email: 'test@gmail2.com', password: 'test' },
    ];
    return {
      games,
      users,
    };
  }

  public genId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 11;
  }
}
