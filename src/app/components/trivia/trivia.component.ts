import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScriptsService } from 'src/app/services/scripts.service';
import { MovieCode } from 'src/app/structures/interfaces';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private scriptsService: ScriptsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.scriptsService.getScript(params.code);
    });
  }

}
