/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomJoke } from './chuckRandom.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http: HttpClient) {}

  urlJoke: string = "https://api.chucknorris.io/jokes/search?query=";

  getJokes(): Observable<{ result: RandomJoke[] }> {
    return this.http.get<{ result: RandomJoke[] }>(this.urlJoke);
  }
}
 */