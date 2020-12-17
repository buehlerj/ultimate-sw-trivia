import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScriptsService } from 'src/app/services/scripts.service';
import { TriviaService } from 'src/app/services/trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {

  public script: any;
  public characters: any;

  public currentlySelectedLine: any;
  public enteredValue: any;

  public correctCounter: number;
  public incorrectCounter: number;
  public skippedCounter: number;
  public linesAnswered: number;
  public numberOfLines: number;

  constructor(private route: ActivatedRoute, private scriptsService: ScriptsService, private triviaService: TriviaService) {
    this.correctCounter = 0;
    this.incorrectCounter = 0;
    this.skippedCounter = 0;
    this.linesAnswered = 0;
    this.numberOfLines = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const scriptArray = this.scriptsService.getScript(params.code);
      const scriptObject = this.triviaService.buildScript(scriptArray);
      this.script = scriptObject.lines;
      this.characters = scriptObject.characters;
      this.numberOfLines = this.script.length;

      this.setCurrentlySelectedLine();
    });
  }

  public setCurrentlySelectedLine() {
    this.currentlySelectedLine = this.script.splice(Math.floor(Math.random() * this.script.length) + 1, 1)[0];
    this.linesAnswered++;

    // Done Answering Trivia
    if (this.linesAnswered === this.numberOfLines + 1) {
      console.log('here');
    }
  }

  public checkIfAnswerIsCorrect() {
    if (this.currentlySelectedLine.character === this.enteredValue) {
      this.correctCounter++;
      this.enteredValue = '';
      this.setCurrentlySelectedLine();
    } else {
      this.incorrectCounter++;
    }
  }

  public skipLine() {
    this.skippedCounter++;
    this.setCurrentlySelectedLine();
  }

}
