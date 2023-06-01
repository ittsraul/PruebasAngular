import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from './countries.interface';
import { Weather } from './weather.interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  UrlCountry = "https://restcountries.com/v3.1/name/";
  UrlWeather = "https://api.openweathermap.org/data/2.5/weather?q=";

  getCountries(country: string) : Observable<Countries>{
    return this.http.get<Countries>(this.UrlCountry + country)
  }

  getWeather(country: string) : Observable<Weather>{
    return this.http.get<Weather>(this.UrlWeather + country + "espa%C3%B1a,esp&units=metric&lang=es&APPID=f2b990c09e6f73102863cfe63a569f43");
  }
}
