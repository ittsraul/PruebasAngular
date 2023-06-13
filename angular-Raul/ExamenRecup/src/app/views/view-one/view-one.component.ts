import { Component } from '@angular/core';

@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent {
  public image :string = "https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg"
  public paragraph : string = "Grupo Uno"
  public counter :number = 0;
  Show() : void {
    this.counter++;
    if (this.counter===1) {
      this.image = "https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg";
      this.paragraph ="Grupo Uno";
    } else if(this.counter===2) {
      this.image = "https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png";
      this.paragraph = "Grupo Dos"
    } else if(this.counter===3){
      this.image = "https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png";
      this.paragraph = "Grupo Tres";
      this.counter = 0;
  }
}
 
}
