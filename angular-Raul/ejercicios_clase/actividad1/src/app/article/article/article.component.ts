import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  public title: string ="La Ciudad de las Artes y las Ciencias";
  public paragraph :string ="Ubicada al final del viejo cauce del río Turia, la Ciudad de las Artes y las Ciencias es un complejo arquitectónico, cultural y de entretenimiento diseñado por Santiago Calatrava y Félix Candela, junto con los ingenieros autores del diseño estructural de las cubiertas del L'Oceanografic Alberto Domingo y Carlos Lázaro.";
  
  public cambiarColor(event: MouseEvent) :void {
    const parrafo: HTMLElement = <HTMLElement>event.target;
  
    if (event.type === 'mouseover') {
      parrafo.style.color = "darkblue";
    } else if (event.type === 'mouseout') {
      parrafo.style.color = "black";
    }
  }

  public cambiarImage(event: MouseEvent) :void{
    const imagen: HTMLElement = <HTMLElement>event.target;
  
    if (event.type === 'mouseover') {
      imagen.style.background = "url('https://www.visitvalencia.com/sites/default/files/styles/gallery_default/public/media/media-images/images/2/20081027_8618_001.jpg?itok=JSWrurHe') no-repeat";
    } else if (event.type === 'mouseout') {
      imagen.style.background = "url('https://www.lovevalencia.com/wp-content/uploads/2010/10/ciudad.jpg') no-repeat";
    }
  }
}
