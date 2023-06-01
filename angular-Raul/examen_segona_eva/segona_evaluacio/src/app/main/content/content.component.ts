import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Images } from 'src/app/views/view-one/images';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  

  @Input() image: string[] = [];
  @Input() text: string = "";
  @Input() clase: string = "";
  @Input() type = "";

  ChangeSize(){

  }

  ImageHide(){


  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.previousClick.emit();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.nextClick.emit();
  }
}
