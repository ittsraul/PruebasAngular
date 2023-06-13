import { Component } from '@angular/core';
import { Result } from 'src/app/interfaces/search-characters';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-view-two',
  templateUrl: './view-two.component.html',
  styleUrls: ['./view-two.component.css']
})
export class ViewTwoComponent {
  public name: string = "";
  public character : Result[] = []
  public container: string[] = [];

  constructor(public service : SearchService){}

  searchResults() :void{
    this.service.getCharacters(this.name).subscribe(response => {
      this.character = response.results;
      for (let i = 0; i < this.character.length; i++) {
        if (this.character[i].name === this.name) {
          console.log(this.name);
         
        }this.container.push(this.character[i].name, this.character[i].height, this. character[i].mass, this.character[i].hair_color, this.character[i].skin_color); 
      }   
    })

  } 
}
