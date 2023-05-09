import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrousel } from './Carrousel';
@Injectable({
  providedIn: 'root'
})
export class CarrouselService {

  constructor(private http: HttpClient) { }
  carrouselJumbo = "http://localhost:8000/carrousel";

  public getCarrousel(): Observable<Carrousel[]>{
    return this.http.get<Carrousel[]>(this.carrouselJumbo);
  }
}
