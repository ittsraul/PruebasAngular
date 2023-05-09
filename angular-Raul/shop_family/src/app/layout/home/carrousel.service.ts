import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrousel } from './Carrousel';
@Injectable({
  providedIn: 'root'
})
export class CarrouselService {

  constructor(private http: HttpClient) { }
  carrouselJumbo = "http://localhost:3001/carrousel";
  tresbanners = "http://localhost:3001/tresbanners";

  public getCarrousel(): Observable<Carrousel[]>{
    return this.http.get<Carrousel[]>(this.carrouselJumbo);
  }

  public getTresbanners(): Observable<Carrousel[]>{
    return this.http.get<Carrousel[]>(this.tresbanners);
  }
}
