import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Content } from './content.interface';
@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private http : HttpClient){}

  urlRicky : string ="https://rickandmortyapi.com/api/character/?name=Rick";
  urlMorty : string ="https://rickandmortyapi.com/api/character/?name=Morty";

  getRickys() : Observable<Content>{
    return this.http.get<Content>(this.urlRicky);
  }

  getMortis() :Observable<Content>{
    return this.http.get<Content>(this.urlMorty);
  }
}
