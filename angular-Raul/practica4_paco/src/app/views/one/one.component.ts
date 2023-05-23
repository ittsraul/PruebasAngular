import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
 // The container of images
 url :string[] = ["https://media.istockphoto.com/id/1172427455/es/foto/hermosa-puesta-de-sol-sobre-el-mar-tropical.jpg?s=612x612&w=0&k=20&c=q48rq3n3xFFwv0ihyYG8j-3MmrKwTWhGhT8isczbzh8=","https://hips.hearstapps.com/hmg-prod/images/sunset-quotes-21-1586531574.jpg?crop=1.00xw:0.752xh;0,0.0601xh&resize=1200:*","https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80","https://images.photowall.com/products/42745/beautiful-sunset.jpg?h=699&q=85"];

  url1: string[] = ["https://media.istockphoto.com/id/1172427455/es/foto/hermosa-puesta-de-sol-sobre-el-mar-tropical.jpg?s=612x612&w=0&k=20&c=q48rq3n3xFFwv0ihyYG8j-3MmrKwTWhGhT8isczbzh8="];
 
  url2: string[]= ["https://media.istockphoto.com/id/1172427455/es/foto/hermosa-puesta-de-sol-sobre-el-mar-tropical.jpg?s=612x612&w=0&k=20&c=q48rq3n3xFFwv0ihyYG8j-3MmrKwTWhGhT8isczbzh8=","https://hips.hearstapps.com/hmg-prod/images/sunset-quotes-21-1586531574.jpg?crop=1.00xw:0.752xh;0,0.0601xh&resize=1200:*","https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80"]
  url3: string[]= [ "https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80"];
  url4: string[]= ["https://images.photowall.com/products/42745/beautiful-sunset.jpg?h=699&q=85"];
 // The container of titles
  titles :string[] = [
   "Ejercicio 1",
   "Ejercicio 2",
   "Ejercicio 3",
   "Ejercicio 4"
 ];
 
 // The container of paragraphs
 paragraphs :string[] = [
   "texto uno bla bla bla",
   "texto dos bla bla bla",
   "texto tres bla bla bla",
   "texto cuatro bla bla bla"
];
 contador1 :number = 0;
 contador2 :number = 0;
contador3 :number = 0;
 contador4 :number = 0;

 currentImage :number = 0;

 @Output() ChangeTitleFunction = new EventEmitter<void>();
 @Output() ChangeParagraph1 = new EventEmitter<void>();
 @Output() ChangeParagraph2 = new EventEmitter<void>();
 @Output() ChangeParagraph3 = new EventEmitter<void>();
 @Output() ChangePhoto = new EventEmitter<void>();
changeParraf1() :void{
  this.contador1++;
  if (this.contador1 > 3) {
    this.contador1 = 0;
  }
  this.ChangeParagraph1.emit();
}
 
 changeParraf2() :void{
   this.contador4++;
   if (this.contador4 > 3) {
     this.contador4 = 0;
   }
   this.ChangeParagraph2.emit();
 }

 changeParraf3() :void{
   this.contador3++;
   if (this.contador3 > 3) {
     this.contador3 = 0;
   }
   this.ChangeParagraph3.emit();
 }

 changeTitle() :void{
   this.contador2++;
   if (this.contador2 > 3 ) {
     this.contador2 = 0;
   }
   this.ChangeTitleFunction.emit();
 }
 
 ChangeImage() :void{
   this.currentImage = (this.currentImage + 1) % this.url.length;
   this.ChangePhoto.emit();
 }

}
