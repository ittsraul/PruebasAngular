import { Component } from '@angular/core';

@Component({
  selector: 'app-article2',
  templateUrl: './article2.component.html',
  styleUrls: ['./article2.component.scss']
})
export class Article2Component {
  isYellowBackground = false;

  changeColor(){
    this.isYellowBackground = true;
  }
}
