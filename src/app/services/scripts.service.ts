import { Injectable } from '@angular/core';
import { MovieCode } from '../structures/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  private scripts: any;

  constructor() {
    this.scripts = {
      [MovieCode.phantom]: 'phantom script',
      [MovieCode.attack]: 'attack script',
      [MovieCode.revenge]: 'revenge script',
      [MovieCode.hope]: 'hope script',
      [MovieCode.empire]: 'empire script',
      [MovieCode.return]: 'return script',
      [MovieCode.awakens]: 'awakens script',
      [MovieCode.last]: 'last script',
      [MovieCode.skywalker]: 'skywalker script',
      [MovieCode.rogue]: 'rogue script',
      [MovieCode.solo]: 'solo script'
    };
  }

  public getScript(movie: MovieCode) {
    return this.scripts[movie];
  }
}
