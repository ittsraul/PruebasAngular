import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentServiceService } from './content-service.service';
import { Character, Result } from 'src/app/main/content/character.interface';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {
  
  constructor(private contentService: ContentServiceService) {}
  resp: Result[] = []; 

  @Input() isImageExpanded: boolean = false;
  @Output() toggleImageEvent = new EventEmitter<void>();

  
  showImage : boolean = true;

  toggleImage() {
    this.toggleImageEvent.emit();
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

  onClick() {
    this.showImage = false;
    this.getRickys();
  }

  onClick2() {
    this.showImage = false;
    this.getMortis();
  }
}