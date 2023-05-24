import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name : string = ""
  public cambio : boolean = true;
changeViews(){
  if(this.name === "viewTwo" ){
    this.cambio = !this.cambio;
  }else if (this.name === "viewOne"){
    this.cambio = !this.cambio;
  }
  
  
}
}
