import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor() { }

  public buildScript(scriptArray: string[]): any {
    const uniqueListOfCharacters = new Set();
    const lines = [];

    scriptArray.forEach((line: string) => {
      if (line.includes(':')) {
        uniqueListOfCharacters.add(line.split(':')[0]);
        lines.push({
          character: line.split(':')[0],
          line: line.split(':')[1]
        });
      }
    });

    return {
      characters: Array.from(uniqueListOfCharacters).sort(),
      lines
    }
  }
}
