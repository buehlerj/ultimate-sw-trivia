import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor() { }

  public buildScript(scriptArray: string[]): any {
    const uniqueListOfCharacters = new Set();
    const lines = [];
    let currentCharacter: string;
    const ignoreCharacters: string[] = ['INTERIOR', 'EXTERIOR'];

    scriptArray.forEach((line: string) => {
      if (line.includes(':')) {
        currentCharacter = line.split(':')[0].trim();
        if (!ignoreCharacters.includes(currentCharacter)) {
          uniqueListOfCharacters.add(currentCharacter);
          lines.push({
            character: currentCharacter,
            line: line.split(':')[1]
          });
        }
      }
    });

    return {
      characters: Array.from(uniqueListOfCharacters).sort(),
      lines
    }
  }
}
