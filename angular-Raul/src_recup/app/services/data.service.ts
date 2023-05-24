import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/response';
import { Result } from '../interfaces/response';
import { Page } from '../interfaces/page';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public urlCharacter: string = 'https://rickandmortyapi.com/api/character/?name=Rick';
  public urlCharacter2: string = 'https://rickandmortyapi.com/api/character/?name=Morty';
  public page : string ="https://rickandmortyapi.com/api/character/?page=2&name=Rick"
 public getCharacter():Observable<Character>{
    return this.http.get<Character>(this.urlCharacter);
  }

  public getCharacter2():Observable<Character>{
    return this.http.get<Character>(this.urlCharacter2);
  }

  public getPage():Observable<Page>{
    return this.http.get<Page>(this.page);
  }
 

 
}
