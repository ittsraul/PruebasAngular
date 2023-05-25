import { Component, Output, Input, EventEmitter } from '@angular/core';
import { GruposContent } from 'src/app/interfaces/grupos-content';
import { DataService } from 'src/app/services/data.service';

import { Character, Info, Result } from 'src/app/interfaces/response';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(public service: DataService) { }
  public one: GruposContent = {
    image: ['https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg', 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png'],
    groupText: "Grupo Uno",
    clase: 'image-container2'
  }
  public two: GruposContent = {
    image: ['https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png', 'https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png', 'https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg'],
    groupText: "Grupo Dos",
    clase: 'image-container3'
  }
  @Output() interfaz = new EventEmitter<GruposContent>();
  @Output() interfaz2 = new EventEmitter<GruposContent>();


  @Input() image: string[] = [];
  @Input() text: string = "";
  @Input() clase: string = "";
  @Input() type = "";

  mostrarPhoto: boolean = true;
  public imgSet: number = 1;
  isBig = false;
  originWidth: string = "";

  changeSize(event: MouseEvent) {
    if (this.imgSet >= 1) {

      const img: HTMLImageElement = <HTMLImageElement>event.target;
      if (!this.isBig) {

        this.ocultarImgs(img);
        this.originWidth = img.style.width;
        img.style.width = "300px";
        this.isBig = true;
      } else {
        const parent: HTMLElement = img.parentElement!;
        const children = parent.getElementsByTagName("img");
        let numImg: Number = 0;
        for (let i = 0; i < children.length; i++) {
          if (img === children[i]) {
            numImg = i + 1;
            children[i].style.width = this.originWidth;
          }
          children[i].style.display = "inline-block";
        }
        this.isBig = false;
      }
    }
  }

  ocultarImgs(img: HTMLImageElement) {
    const parent: HTMLElement = img.parentElement!;
    const children = parent.getElementsByTagName("img");

    for (let i = 0; i < children.length; i++) {
      if (img === children[i]) {

      } else { children[i].style.display = "none"; }

    }
  }


  emitInterfaces() {
    if (this.imgSet === 1) {
      this.interfaz.emit(this.one)
    } else if (this.imgSet === 2) {
      this.interfaz2.emit(this.two)
    }
  }



  ngOnInit() {
    if (this.imgSet > 1 && !this.isBig) {
      this.imgSet++;
    } else if (this.imgSet === 2 && !this.isBig) {
      this.imgSet--;
    }
    this.emitInterfaces()
  }

  resp: Result[] = [];
  page : string [] = [];
  public getCharacter(): void {
    this.service.getCharacter().subscribe((response) => {
      this.resp = response.results;
      console.log(response)
      
    });
  }
  public getCharacter2(): void {
    this.service.getCharacter2().subscribe((response) => {
      this.resp = response.results;
    });
  }

  onClick() {
    this.mostrarPhoto = false;
    this.getCharacter()
  }

  onClick2() {
    this.mostrarPhoto = false;
    this.getCharacter2()
  }


}



