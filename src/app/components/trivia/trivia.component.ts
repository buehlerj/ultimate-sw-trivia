import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScriptsService } from 'src/app/services/scripts.service';
import { TriviaService } from 'src/app/services/trivia.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AnswerState } from 'src/app/structures/enums';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {

  public script: any;
  public characters: any;

  public currentlySelectedLine: any;
  public pastAnswers: any[];
  public enteredValue: any;

  public correctCounter: number;
  public incorrectCounter: number;
  public skippedCounter: number;
  public linesAnswered: number;
  public numberOfLines: number;
  public percentCorrect: number;
  public triviaAnswerState: AnswerState;
  public finished: boolean;

  constructor(private route: ActivatedRoute, private scriptsService: ScriptsService, private triviaService: TriviaService, private utilsService: UtilsService) {
    this.pastAnswers = [];
    this.enteredValue = '';
    this.correctCounter = 0;
    this.incorrectCounter = 0;
    this.skippedCounter = 0;
    this.linesAnswered = 0;
    this.numberOfLines = 0;
    this.percentCorrect = null;
    this.finished = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.scriptsService.getScript(params.code).then(
        (scriptArray: string[]) => {
          const scriptObject = this.triviaService.buildScript(scriptArray);
          this.script = scriptObject.lines;
          this.utilsService.shuffle(this.script);
          this.characters = scriptObject.characters;
          this.numberOfLines = this.script.length;

          this.setCurrentlySelectedLine();
        }
      );
    });
  }

  public setCurrentlySelectedLine() {
    if (this.currentlySelectedLine) {
      this.pastAnswers.unshift(this.currentlySelectedLine);
    }
    this.currentlySelectedLine = this.script.pop(0);
    this.linesAnswered++;

    // Done Answering Trivia
    if (this.linesAnswered === this.numberOfLines + 1) {
      this.finished = true;
    }
  }

  public checkIfAnswerIsCorrect() {
    if (this.currentlySelectedLine.character.toLowerCase() === this.enteredValue.toLowerCase()) {
      this.correctCounter++;
      this.enteredValue = '';
      this.setAnswerState(AnswerState.CORRECT);
      this.currentlySelectedLine.status = AnswerState.CORRECT;
      this.setCurrentlySelectedLine();
    } else {
      this.incorrectCounter++;
      this.currentlySelectedLine.status = AnswerState.INCORRECT;
      this.setAnswerState(AnswerState.INCORRECT);
    }
    this.calculatePercentCorrect();
  }

  public skipLine() {
    this.skippedCounter++;
    this.enteredValue = '';
    if (!this.currentlySelectedLine.status) {
      this.currentlySelectedLine.status = AnswerState.SKIP;
    }
    this.setCurrentlySelectedLine();
    this.calculatePercentCorrect();
    this.setAnswerState(AnswerState.SKIP);
  }

  private calculatePercentCorrect() {
    const divisor = this.correctCounter + this.incorrectCounter;
    if (divisor > 0) {
      this.percentCorrect = this.correctCounter / divisor;
    }
  }

  private setAnswerState(newState: AnswerState) {
    this.triviaAnswerState = null;
    setTimeout(() => {
      this.triviaAnswerState = newState;
    });
  }
}
