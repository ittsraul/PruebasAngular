import { Component } from '@angular/core';
import { Character, Result } from 'src/app/main/content/character.interface';
import { ContentServiceService } from 'src/app/main/content/content-service.service';

@Component({
  selector: 'app-view-two',
  templateUrl: './view-two.component.html',
  styleUrls: ['./view-two.component.css']
})
export class ViewTwoComponent {
  public data: Result[] = [];
  public showImage: boolean = false;

  constructor(private contentService: ContentServiceService) {}

  getRickys(): void {
    this.contentService.getRickys().subscribe((response) => {
      this.data = response.results;
      console.log(response.results);
      this.showImage = true; // Mostrar imágenes después de obtener los datos
    });
  }

  getMortis(): void {
    this.contentService.getMortis().subscribe((response) => {
      this.data = response.results;
      console.log(response.results);
      this.showImage = true; // Mostrar imágenes después de obtener los datos
    });
  }
}