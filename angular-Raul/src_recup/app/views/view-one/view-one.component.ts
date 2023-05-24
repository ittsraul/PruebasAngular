import { Component } from '@angular/core';
import { GruposContent } from 'src/app/interfaces/grupos-content';
@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent {
  public image : string[] = [""];
  public text : string = "";
  public clase : string = "";
  
  public one :string = "one";
  getInterfaz(primero : GruposContent)
  {
    this.image = primero.image;
    this.text = primero.groupText;
    this.clase = primero.clase;
  }
  
  getInterfaz2(segundo : GruposContent)
  {
    this.image = segundo.image;
    this.text = segundo.groupText;
    this.clase = segundo.clase;
  }
}
