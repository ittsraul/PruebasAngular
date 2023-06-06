import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { One } from 'src/app/main/content/one';
@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent {
  public contents = [one];
  public click: boolean = false;

  public onPhoto(obj: Data) {
    if (obj.caption === "Grupo Uno") {
      if (contents[0].class ==="image-container") {
        contents[0] = "image-container2";
        contents[0].images = [""];
      }else{
        contents[0].class = "image-container";
        if (obj.images === 0) {
          contents.images = [""];
        } else {
          contents[0].images = [""];
        }
      }
    } else {
      if (contents[1].class ==="image-container") {
        contents[1] = "image-container3";
        contents[1].images = [""];
      }else{
        contents[1].class = "image-container";
        if (obj.images === 0) {
          contents.images = [""];
        } else {
          contents[1].images = [""];
        }
      }
    }
  }
}
