import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { One } from './one';
import { Result } from './character.interface';
import { ContentServiceService } from './content-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {
  
  public one: One = {
    image: ['https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg', 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png'],
    caption: "Grupo Uno",
    class: 'image-container2'
  }
  public two: One = {
    image: ['https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png', 'https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png', 'https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg'],
    caption: "Grupo Dos",
    class: 'image-container3'
  }
  
  @Input() class: string = '';
  @Input() image: string[] = [];
  @Input() caption: string = '';
  @Input() type: string = '';

  @Output() photo = new EventEmitter<One>();
  @Output() photo2 = new EventEmitter<One>();

  public showImage: boolean = true;
  public imgSet :number = 1;
  public isBig: boolean = false;
  public originalWidth: string = '';

  public resp: Result[] = [];

  constructor(private http: HttpClient) {}

  public changeSize(event: MouseEvent) {
    if (this.image.length >= 1) {
      const image: HTMLImageElement = event.target as HTMLImageElement;
      if (!this.isBig) {
        this.hideImages(image);
        this.originalWidth = image.style.width;
        image.style.width = '300px';
        this.isBig = true;
      } else {
        const parent: HTMLElement = image.parentElement!;
        const children = parent.getElementsByTagName('img');
        let numImg: Number = 0;
        for (let i = 0; i < children.length; i++) {
          if (image === children[i]) {
            numImg = i + 1;
            children[i].style.width = this.originalWidth;
          }
          children[i].style.display = 'inline-block';
        }
        this.isBig = false;
      }
    }
  }

  public hideImages(image: HTMLImageElement) {
    const parent: HTMLElement = image.parentElement!;
    const children = parent.getElementsByTagName('img');

    for (let i = 0; i < children.length; i++) {
      if (image === children[i]) {
        
      }else{
        children[i].style.display = 'none';
      }
    }
  }

  emitInterfaces() {
    if (this.imgSet === 1) {
      this.photo.emit(this.one)
    } else if (this.imgSet === 2 ) {
      this.photo2.emit(this.two)
    }
  }

  public ngOnInit() {
    if (this.image.length > 1 && !this.isBig) {
      this.imgSet++;
    } else if (this.image.length === 2 && !this.isBig) {
      this.imgSet--;
    }
    this.emitInterfaces();
  }

 
}