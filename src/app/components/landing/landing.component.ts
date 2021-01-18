import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MovieCode } from 'src/app/structures/enums';
import { Movie } from 'src/app/structures/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public movies: Movie[];

  constructor(private router: Router) {
    this.movies = [
      { code: MovieCode.phantom, title: 'Phantom Menace', poster: 'phantom_menace.jpg', enabled: true },
      { code: MovieCode.attack, title: 'Attack of the Clones', poster: 'attack_of_the_clones.jpg', enabled: true },
      { code: MovieCode.revenge, title: 'Revenge of the Sith', poster: 'revenge.jpg', enabled: true },
      { code: MovieCode.hope, title: 'A New Hope', poster: 'anh.jpg', enabled: true },
      { code: MovieCode.empire, title: 'The Empire Strikes Back', poster: 'empire.jpg', enabled: false },
      { code: MovieCode.return, title: 'Return of the Jedi', poster: 'return.jpg', enabled: false },
      { code: MovieCode.awakens, title: 'The Force Awakens', poster: 'force_awakens.jpg', enabled: true },
      { code: MovieCode.last, title: 'The Last Jedi', poster: 'last_jedi.jpg', enabled: false },
      { code: MovieCode.skywalker, title: 'The Rise of Skywalker', poster: 'rise_of_skywalker.jpg', enabled: false },
      { code: MovieCode.rogue, title: 'Rogue One', poster: 'rogue.jpg', enabled: false },
      { code: MovieCode.solo, title: 'Solo', poster: 'solo.jpg', enabled: false }
    ];
  }

  ngOnInit(): void {
  }

  route(movie: Movie) {
    if (movie.enabled) {
      this.router.navigate(['/trivia', movie.code]);
    }
  }

}
