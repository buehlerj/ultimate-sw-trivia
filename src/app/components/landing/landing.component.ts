import { Component, OnInit } from '@angular/core';
import { Movie, MovieCode } from 'src/app/structures/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public movies: Movie[];

  constructor() {
    this.movies = [
      { code: MovieCode.phantom, title: 'Phantom Menace', poster: 'phantom_menace.jpg' },
      { code: MovieCode.attack, title: 'Attack of the Clones', poster: 'attack_of_the_clones.jpg' },
      { code: MovieCode.revenge, title: 'Revenge of the Sith', poster: 'revenge.jpg' },
      { code: MovieCode.hope, title: 'A New Hope', poster: 'anh.jpg' },
      { code: MovieCode.empire, title: 'The Empire Strikes Back', poster: 'empire.jpg' },
      { code: MovieCode.return, title: 'Return of the Jedi', poster: 'return.jpg' },
      { code: MovieCode.awakens, title: 'The Force Awakens', poster: 'force_awakens.jpg' },
      { code: MovieCode.last, title: 'The Last Jedi', poster: 'last_jedi.jpg' },
      { code: MovieCode.skywalker, title: 'The Rise of Skywalker', poster: 'rise_of_skywalker.jpg' },
      { code: MovieCode.rogue, title: 'Rogue One', poster: 'rogue.jpg' },
      { code: MovieCode.solo, title: 'Solo', poster: 'solo.jpg' }
    ];
  }

  ngOnInit(): void {
  }

}
