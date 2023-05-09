import { Component, OnInit } from '@angular/core';
import { Carrousel } from './Carrousel';
import { CarrouselService } from './carrousel.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  image: Carrousel[];

  constructor(private carrouselService: CarrouselService) {
    this.image = [];
   }

  ngOnInit(): void {
    this.carrouselService.getCarrousel().subscribe(image => {
      this.image = image;
    });
  }
}
