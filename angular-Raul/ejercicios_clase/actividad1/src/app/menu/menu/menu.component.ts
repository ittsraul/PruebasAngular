import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public title :string = 'edificios';
  public links :string[] = ["Hemisferic","Musea de las ciencias","Oceanográfic", "Palau de les arts","Umbracle"];
  public class : string = "hidden";
  public counter :number = 0;


  /* Mouse Event  */
  public onClick() :void{
    if (this.counter === 0) {
      this.class = "hidden";
      this.counter = 1;
    } else {
      this.class = "showed";
      this.counter = 0;
    }
  }
}
