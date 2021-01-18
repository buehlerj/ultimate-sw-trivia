import { Injectable } from '@angular/core';
import { MovieCode, MovieTextCode } from '../structures/enums';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScriptsService {

  constructor(private http: HttpClient) { }

  public getScript(movie: MovieCode): Promise<string[]> {
    return new Promise((resolve: any, reject: any) => {
      this.http.get('./assets/scripts/' + MovieTextCode[movie], { responseType: 'text' as 'json' }).subscribe(
        (data: any) => {
          resolve(data.split("\n"));
        },

        (_err: any) => {
          reject([]);
        }
      )
    });
  }
}
