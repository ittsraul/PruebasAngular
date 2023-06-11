import { Component } from '@angular/core';
import { ImageGroup } from 'src/app/models/content';
import { Images } from './images';
@Component({
  selector: 'app-view-one',
  templateUrl: './view-one.component.html',
  styleUrls: ['./view-one.component.css']
})
export class ViewOneComponent {
  /* Grupo 1 */
  public one: Images = {
    image: ['https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg'],
    groupText: 'Grupo Tres',
    clase: 'image-container'
  }

  /* Grupo 2 */
  public two: Images = {
    image: ['https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png'],
    groupText: 'Grupo Dos',
    clase: 'image-container2'
  }

  /* Grupo 3 */
  public three: Images = {
    image: ['https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png'],
    groupText: 'Grupo Tres',
    clase: 'image-container3'
  }

 
}
