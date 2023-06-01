import { Component } from '@angular/core';
import { ImageGroup } from 'src/app/models/content';
@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent {
  imageGroups: ImageGroup[] = [
    {
      imageUrl: 'https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg',
      caption: 'Grupo Uno',
    },
    {
      imageUrl:
        'https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png',
      caption: 'Grupo Dos',
    },
    {
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png',
      caption: 'Grupo Tres',
    },
    
  ];

  currentGroupIndex: number = 0;
  currentImageGroup: ImageGroup;

  constructor() {
    this.currentImageGroup = this.imageGroups[this.currentGroupIndex];
  }

  previousGroup() {
    this.currentGroupIndex = (this.currentGroupIndex - 1 + this.imageGroups.length) % this.imageGroups.length;
    this.currentImageGroup = this.imageGroups[this.currentGroupIndex];
  }

  nextGroup() {
    this.currentGroupIndex = (this.currentGroupIndex + 1) % this.imageGroups.length;
    this.currentImageGroup = this.imageGroups[this.currentGroupIndex];
  }
}
