import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon, Result } from './pokemon.interface';
@Component({
  selector: 'app-content-pok',
  templateUrl: './content-pok.component.html',
  styleUrls: ['./content-pok.component.css']
})
export class ContentPokComponent implements OnInit{
  poke: Result[] = [];
  number :number = 0;
  constructor(protected pokemon :PokemonService){}

  ngOnInit(): void {
      this.GetAllPokemons();
  }

  SendPokedexNumber(){
    if (this.number > 0) {
      this.pokemon.getPokemonById(this.number).subscribe((response)=>{
        const index = this.poke.findIndex((p) => p.name === response.name);
        if (index !== -1) {
          this.poke[index] = response;
        } else {
          this.poke.push(response);
        }
      });
    }
  }

  GetAllPokemons(){
    this.pokemon.getPokemons().subscribe((response)=>{
      this.poke = response.results;
      /* console.log(response); */
    });
  }

}
