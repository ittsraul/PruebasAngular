import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character.interface';
@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  
  constructor(private http : HttpClient){}

  urlRicky : string ="https://rickandmortyapi.com/api/character/?name=Rick";
  urlMorty : string ="https://rickandmortyapi.com/api/character/?name=Morty";
  ApiUrl ="https://rickandmortyapi.com/api/character/?name=";
  
  getRickys() : Observable<Character>{
    return this.http.get<Character>(this.urlRicky);
  }

  getMortis() :Observable<Character>{
    return this.http.get<Character>(this.urlMorty);
  }

  public getCharacter(name: string): Observable<Character> {
    return this.http.get<Character>(this.ApiUrl + name);
  }
}
