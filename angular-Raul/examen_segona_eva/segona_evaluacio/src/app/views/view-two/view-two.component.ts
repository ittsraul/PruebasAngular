import { Component } from '@angular/core';
import { FormServiceService } from 'src/app/main/form/form-service.service';
import { Films } from 'src/app/models/films';

@Component({
  selector: 'app-view-two',
  templateUrl: './view-two.component.html',
  styleUrls: ['./view-two.component.css']
})
export class ViewTwoComponent {
films :string[] = [];
director :Films[] = [];
starShips : string[] = [];

constructor(public Starwars : FormServiceService){}
FindCharacter( service: string){
  this.Starwars.getCharacter(service).subscribe(response =>{
    this.films = response.results[0].films;
    this.films.forEach(consulta => {

      this.Starwars.getFilms(consulta).subscribe(response => {
        this.director.push(response);
        this.director.forEach(responseDirector =>  {

          let starShip = responseDirector.starships[0]
          this.Starwars.getStarShips(starShip).subscribe(responseStarShips =>{
            responseDirector.starships[0] = responseStarShips.name;
          });
        });
      });
    });
  });
}


}
