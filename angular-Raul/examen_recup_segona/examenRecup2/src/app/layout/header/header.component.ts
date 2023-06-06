import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /* name :string = "";
  change : boolean = true;
  title :string = "Vista 1";

  constructor(private ruta : Router){}
  changeViews() {
    switch (this.name) {
      case "viewTwo":
        this.change = !this.change;
        this.title = "Vista 2";
        this.ruta.navigate(['viewTwo']);
        break;
      case "viewOne":
        this.change = !this.change;
        this.title = "Vista 1";
        this.ruta.navigate(['viewOne']);
        break;
      case "viewThree":
        this.change = !this.change;
        this.title = "Vista 3";
        this.ruta.navigate(['viewThree']);
        break;
      default:
        this.title = "Vista 1";
        this.ruta.navigate(['viewOne']);
        break;
    }
  } */
  /* Another type to do */ 
  formReceive :string = "";
  routeName :string ="";

  /* Object */
  public data: {viewName: string; routeName: string; className: string; image: string}[] = [
    {
      viewName: "Vista 1",
      routeName: "viewOne",
      className: "nav-link",
      image: ""
    },
    {
      viewName: "Vista 1",
      routeName: "viewOne",
      className: "nav-link",
      image: ""
    }
  ];
  public current: number = 0;

  onClick(current: number) :void{
    if(this.current === 0){
      this.data[1].className = "nav-link";
    }else if(this.current === 1){
      this.data[0].className = "nav-link";
    }
    this.data[this.current].className = "nav-link logo";
  }

  onSubmit() :void{
    if (this.formReceive === "viewOne") {
      this.onClick(0);
    }else if(this.formReceive === "viewTwo"){
      this.onClick(1);
    }
    this.formReceive = "";
  }
}

