import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  //variables
  articulos :Article[] = [];
  modo?: string; 

  //constructor
  constructor(private router: Router, private route:ActivatedRoute, private articuloService: ArticleService){}


  //when is initialized
  ngOnInit() :void {
    this.GetParams();
    this.getArticlesApi();
  }

  //get articles of my endpoints
  private getArticlesApi(){
    this.articuloService.getArticlesApi().subscribe(
      (data) => {
      data.forEach( (article) => {
        const articleIncludes: Article = new Article(article.id, article.name, article.image, article.description, article.price);
        this.articulos.push(articleIncludes);
      })
    })
  }

  private GetArticles(){
    this.articulos = this.articuloService.getArticles();
  }


  private GetParams() :void{
    this.modo = (this.route.snapshot.queryParamMap.get("modo") ?? undefined);
  }

  public navegarArticulo(idArticulo: number) :void{
    this.router.navigate(['articulo-ficha', idArticulo]);
  }

  
}
