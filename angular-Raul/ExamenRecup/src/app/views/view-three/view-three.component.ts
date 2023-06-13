import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/search-films';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-view-three',
  templateUrl: './view-three.component.html',
  styleUrls: ['./view-three.component.css']
})
export class ViewThreeComponent implements OnInit {
  public data: Result[] = [];
  constructor(private search: SearchService) { }
  public image: string[]= ["https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg","https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png","https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png","https://www.theoriginalunderground.com/cdn/shop/products/1977-star-wars-international-film-poster-print-247742_1024x.jpg?v=1661264362","https://lumiere-a.akamaihd.net/v1/images/au_starwars_revengeofthesith_movie_poster_d6097970.jpeg","https://images.thedirect.com/media/article_full/star-wars-next-movies.jpg"];
  public paragraph: string = "";
  public title :string[]  = [];

  ngOnInit(): void {
    this.searchFilms();
  }

  public searchFilms(): void {
    this.search.getFilms().subscribe((response) => {
      this.data = response.results;
      for (let i = 0; i < this.data.length; i++) {
        console.log(this.data[i].title);
        this.title.push(this.data[i].title);
      }
      console.log(this.title);
    });

  }
  

 

}
