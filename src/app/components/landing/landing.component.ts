import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/structures/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public movies: Movie[];

  constructor() {
    this.movies = [
      { id: 1, title: 'Phantom Menace', poster: 'phantom_menace.jpg' },
      { id: 2, title: 'Attack of the Clones', poster: 'attack_of_the_clones.jpg' },
      { id: 3, title: 'Revenge of the Sith', poster: 'revenge.jpg' },
      { id: 4, title: 'A New Hope', poster: 'anh.jpg' },
      { id: 5, title: 'The Empire Strikes Back', poster: 'empire.jpg' },
      { id: 6, title: 'Return of the Jedi', poster: 'return.jpg' },
      { id: 7, title: 'The Force Awakens', poster: 'force_awakens.jpg' },
      { id: 8, title: 'The Last Jedi', poster: 'last_jedi.jpg' },
      { id: 9, title: 'The Rise of Skywalker', poster: 'rise_of_skywalker.jpg' },
      { id: 10, title: 'Rogue One', poster: 'rogue.jpg' },
      { id: 11, title: 'Solo', poster: 'solo.jpg' }
    ];
  }

  ngOnInit(): void {
  }

}
