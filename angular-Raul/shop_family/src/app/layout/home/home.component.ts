import { Component,OnInit } from '@angular/core';
import { Carrousel } from '../home/Carrousel';
import { CarrouselService } from '../home/carrousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  image: Carrousel[] = [];
  currentImageIndex = 0;
  banners: Carrousel[] = [];

  constructor(private carrouselService: CarrouselService) {}

  ngOnInit(): void {
    this.carrouselService.getCarrousel().subscribe((image: Carrousel[]) => {
      if (image.length > 0) { 
        this.image = image; 
      }
    });
    this.carrouselService.getTresbanners().subscribe((banners: Carrousel[]) => {
      if (banners.length > 0) { 
        this.banners = banners; 
      }
    });
    
  }

  siguiente(): void {
    if (this.currentImageIndex < this.image.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  anterior(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.image.length - 1;
    }
  }
}
