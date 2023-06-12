import { Injectable } from '@angular/core';
import { ContentPokComponent } from './content-pok.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, Result } from './pokemon.interface';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  urlPok ="https://pokeapi.co/api/v2/pokemon";

  getPokemons(): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.urlPok}/pokemon?limit=1000`);
  }

  getPokemonById(id: number): Observable<Result> {
    return this.http.get<Result>(`${this.urlPok}/pokemon/${id}`);
  }

  getPokemonImageUrl(pokemon: Result): string {
    const pokemonId = this.extractPokemonIdFromUrl(pokemon.url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  }

  private extractPokemonIdFromUrl(url: string): number {
    const parts = url.split('/');
    return +parts[parts.length - 2];
  }

 

}
 