import { Component } from '@angular/core';
import { One } from 'src/app/main/content/one';
@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewoneComponent {
  public image: string[] = ['https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg', 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png'];
  public caption: string = 'Grupo Uno';
  public class: string = 'image-container2';

  public getPhoto(first: One) {
    this.image = first.image;
    this.caption = first.caption;
    this.class = first.class;
  }

  public getPhoto2(second: One) {
    this.image = second.image;
    this.caption = second.caption;
    this.class = second.class;
  }
}
