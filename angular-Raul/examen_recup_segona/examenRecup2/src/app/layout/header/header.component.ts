import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name :string = "";
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
      default:
        this.title = "Vista 1";
        this.ruta.navigate(['viewOne']);
        break;
    }
  } 
 
}

