import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile, Response } from './github.interface';

@Injectable({
  providedIn: 'root'
})
export class OneService {
  constructor(private http : HttpClient) { }

  ApiUrl ="https://api.github.com/search/users?q=";
  ApiUrlDavid ="https://api.github.com/search/users?q=David";
  ApiUrlDeveloper ="https://api.github.com/search/users?q=Developer";

  getUser(username: string): Observable<Response> {
    const url = `${this.ApiUrl}${username}`;
    return this.http.get<Response>(url);
  }

  getsUserDavid() :Observable<Response>{
    return this.http.get<Response>(this.ApiUrlDavid);
  }

  getUserDeveloper():Observable<Response>{
    return this.http.get<Response>(this.ApiUrlDeveloper);
  }
}
