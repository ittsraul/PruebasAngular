import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name : string = "";
  showForm: boolean = true;
  @Output() FindCharacter = new EventEmitter;


  OnSubmit(){
    this.showForm = false;
    this.FindCharacter.emit(this.name);
  }
 
}
