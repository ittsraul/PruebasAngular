import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public title: string = "Links";
  public links: string[] = ["Imdb","Filmaffinity","Rotten Tomatoes"];
  public class: string ="oculto"; 
  public counter :number = 0;

  public onClick() :void{
    if (this.counter === 0) {
      this.class = "Hidden";
      this.counter = 1;
    } else {
      this.class = "visibility";
      this.counter = 0;
    }
  }

}
