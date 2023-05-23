import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  viewRoute: string = 'one';

  changeView(event: Event): void {
    event.preventDefault();
    if (this.viewRoute.toLowerCase() === 'one') {
      this.viewRoute = '/One';
    }
    if (this.viewRoute.toLowerCase() === 'two') {
      this.viewRoute = '/Two';
    }
  }
 
  /* Para el 1 */
  currentTitle: string = "";
  currentParagraph1: string = "";
  currentParagraph2: string = "";
  currentParagraph3: string = "";
  currentImage: string = "";
  /*Para el 2*/
  current2Title: string = "";
  current2Paragraph1: string = "";
  current2Paragraph2: string = "";
  current2Paragraph3: string = "";
  current2Image: string = "";

  handleChangeTitle(title: string): void {
    this.currentTitle = title
  }

  handleChangeParagraph1(parraf1: string): void {
    this.currentParagraph1 = parraf1
  }

  handleChangeParagraph2(parraf2: string): void {
    this.currentParagraph2 = parraf2
  }

  handleChangeParagraph3(parraf3: string): void {
    this.currentParagraph3 = parraf3
  }

  handleChangePhoto(image: string): void {
    this.currentImage  = image;
  }

    handle2ChangeTitle(title: string): void {
    this.current2Title = title
  }

  handle2ChangeParagraph1(parraf1: string): void {
    this.current2Paragraph1 = parraf1
  }

  handle2ChangeParagraph2(parraf2: string): void {
    this.current2Paragraph2 = parraf2
  }

  handle2ChangeParagraph3(parraf3: string): void {
    this.current2Paragraph3 = parraf3
  }

  handle2ChangePhoto(image: string): void {
    this.current2Image  = image;
  }
}
