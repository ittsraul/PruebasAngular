import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Article } from '../article.model';

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
  constructor(private router: Router, private route:ActivatedRoute){}


  //when is initialized
  ngOnInit() :void {
    this.getArticles();
    this.articulos = this.getArticles();
  }

  private getArticles() : Article[] {
    const articlesToReturn: Article[] = [];
    throw new Error('Method not implemented.');
  }

  private GetParams() :void{
    this.modo = (this.route.snapshot.queryParamMap.get("modo") ?? undefined);
  }

  public navegarArticulo(idArticulo: number) :void{
    this.router.navigate(['article-list', idArticulo]);
  }
}
