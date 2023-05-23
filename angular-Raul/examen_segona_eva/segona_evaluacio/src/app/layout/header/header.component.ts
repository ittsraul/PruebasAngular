import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 numVista: string= "1";

 public changeView(dir: string) :void{
  if (dir==="/one") {
    this.numVista = "1";
  }if(dir==="two") {
    this.numVista = "2";
  }
 }

}
