import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContentServiceService } from './content-service.service';
import { Data } from '@angular/router';
import { Result } from './character.interface';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {
  constructor(private contentService: ContentServiceService) {}
  resp: Result[] = [];



  @Input() class: string = '';
  @Input() images: string[] = [];
  @Input() caption: string = "";
  @Output() photo = new EventEmitter<Data>();

  public onPhoto(i: number): void{
    let data: Data = { image: i, class: this.class, caption: this.caption};
    this.photo.emit(data);
  }
  
  /* Parte 2*/

  getRickys() :void{
    this.contentService.getRickys().subscribe((response) => {
      this.resp = response.results; 
      console.log(response);
    });
  } 

  getMortis() :void{
    this.contentService.getRickys().subscribe((response) => {
      this.resp = response.results; 
      console.log(response);
    });
  } 

}