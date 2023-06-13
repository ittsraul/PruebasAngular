import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchCharacters } from '../interfaces/search-characters';
import { SearchFilms } from '../interfaces/search-films';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = "https://swapi.dev/api/people/?name=";
  urlFilms: string = "https://swapi.dev/api/films/";
  constructor(private http :HttpClient) { }

  getCharacters(name: string) : Observable<SearchCharacters>{
    return this.http.get<SearchCharacters>(this.url + name);
  }

  getFilms() :Observable<SearchFilms>{
    return this.http.get<SearchFilms>(this.urlFilms);
  }
}
