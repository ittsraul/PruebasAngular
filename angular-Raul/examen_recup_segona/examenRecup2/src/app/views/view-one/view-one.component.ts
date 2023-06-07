import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { one } from 'src/app/main/content/one';
@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewoneComponent {
  public one = [one];
  public click: boolean = false;

  public onPhoto(obj: Data) {
    if (obj.caption === "Grupo Uno") {
      if (one[0].class ==="image-container") {
        one[0] = "image-container2";
        one[0].image = [""];
      }else{
        one[0].class = "image-container";
        if (obj.image === 0) {
          one.image = [""];
        } else {
          one[0].image = [""];
        }
      }
    } else {
      if (one[1].class ==="image-container") {
        one[1] = "image-container3";
        one[1].image = [""];
      }else{
        one[1].class = "image-container";
        if (obj.image === 0) {
          one.image = [""];
        } else {
          one[1].image = [""];
        }
      }
    }
  }
}
