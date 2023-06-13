import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header: string = "Cabecera 1";
  background :string = "url(https://static.eldiario.es/clip/0a1ee554-bcf7-4c32-9c2a-37e76297ef6f_16-9-discover-aspect-ratio_default_0.jpg)";
  counter: number = 0;
  class: string ="";
  constructor(private ruta: Router){}

  navigate1(){
    this.header = "Cabecera 1";
    this.background = "url(https://static.eldiario.es/clip/0a1ee554-bcf7-4c32-9c2a-37e76297ef6f_16-9-discover-aspect-ratio_default_0.jpg)";
    this.ruta.navigate(["viewOne"]);
  }
  navigate2(){
    this.header = "Cabecera 2";
    this.background = "url(https://cdn.pixabay.com/photo/2015/12/08/15/15/robot-1083158_640.jpg)";
    this.ruta.navigate(["viewTwo"]);
  }
  navigate3(){
    this.header = "Cabecera 3";
    this.background = "url(https://cdn.pixabay.com/photo/2019/12/20/17/15/yoda-4708878_640.jpg)";
    this.ruta.navigate(["viewThree"]);
  }

  Siguiente(){
    this.counter++;
    this.class = "logo";
    if (this.counter === 1) {
      this.navigate1();
      this.class = "logo";
    }
    else if(this.counter === 2){
      this.navigate2();
      this.class = "logo";
    }
    else if(this.counter === 3){
      this.navigate3();
      this.counter = 0;
      this.class = "logo";
    }
    else{ 
      this.class  = "";
    }
  }

  Anterior(){
    this.counter--;
    if (this.counter === 1) {
      this.navigate1();
      this.class = "logo";
    }
    else if(this.counter === 2){
      this.navigate2();
      this.class = "logo";
    }
    else if(this.counter === 3){
      this.navigate3();
      this.counter = 3;
      this.class = "logo";
    }
    else{
      this.counter = 4
      this.class = "";
    }
  }
}
