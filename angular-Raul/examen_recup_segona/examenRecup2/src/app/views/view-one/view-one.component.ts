import { Component } from '@angular/core';
import { One } from 'src/app/main/content/one';
@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewoneComponent {
  public image: string[] = [''];
  public caption: string = '';
  public class: string = '';

  public one: string = "one"
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
