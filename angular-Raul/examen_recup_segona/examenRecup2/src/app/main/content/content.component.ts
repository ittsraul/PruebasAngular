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
  public isBig: boolean = false;
  public originalWidth: string = '';

  public resp: Result[] = [];

  constructor(private http: HttpClient) {}

  public changeSize(event: MouseEvent) {
    if (this.image.length >= 1) {
      const image: HTMLImageElement = event.target as HTMLImageElement;
      if (!this.isBig) {
        this.hideOtherImages(image);
        this.originalWidth = image.style.width;
        image.style.width = '300px';
        this.isBig = true;
      } else {
        const parent: HTMLElement = image.parentElement!;
        const children = parent.getElementsByTagName('img');
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = 'inline-block';
          children[i].style.width = this.originalWidth;
        }
        this.isBig = false;
      }
    }
  }

  public hideOtherImages(image: HTMLImageElement) {
    const parent: HTMLElement = image.parentElement!;
    const children = parent.getElementsByTagName('img');

    for (let i = 0; i < children.length; i++) {
      if (image !== children[i]) {
        children[i].style.display = 'none';
      }
    }
  }

  public emitInterfaces() {
    if (this.type === 'one') {
      this.photo.emit({
        image: this.image,
        class: this.class,
        caption: this.caption
      });
    } else if (this.type === 'two') {
      this.photo2.emit({
        image: this.image,
        class: this.class,
        caption: this.caption
      });
    }
  }

  public ngOnInit() {
    if (this.image.length > 1 && !this.isBig) {
      this.image.push(this.image.shift()!);
    } else if (this.image.length === 2 && !this.isBig) {
      this.image.unshift(this.image.pop()!);
    }
  }

  public onClick() {
    this.showImage = false;
  }

  public onClick2() {
    this.showImage = false;
  }
}