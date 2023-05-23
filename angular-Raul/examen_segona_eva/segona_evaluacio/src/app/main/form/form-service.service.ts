import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Films } from 'src/app/models/films';
import { StarShips } from 'src/app/models/star-ships';
import { Characters } from 'src/app/models/characters';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http :HttpClient) { }

  apiUrl = "http//swapi.dev/api/people/?search=";

  /* Get Characters */
  getCharacter(characterName :string) :Observable<Characters>{
    return this.http.get<Characters>(this.apiUrl);
  } 

  /* Get Films */
  getFilms(film : string) :Observable<Films>{
    return this.http.get<Films>(this.apiUrl);
  }

  /* Get Ships */
  getStarShips(ships :string) :Observable<StarShips> {
    return this.http.get<StarShips>(this.apiUrl);
  }
}
