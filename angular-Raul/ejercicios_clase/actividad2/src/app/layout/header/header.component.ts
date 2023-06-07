import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public title: string = "Pelis";

  public changetext() :void{
    this.title = "Recommended";
  }

  public onImageEnter(event: MouseEvent){
    const image: HTMLElement = <HTMLElement>event.target;
    image.style.opacity = "0.5"; 
  }

  public onImageLeave(event: MouseEvent){
    const image: HTMLElement = <HTMLElement>event.target;
    image.style.opacity = '1'; 

  }
}
