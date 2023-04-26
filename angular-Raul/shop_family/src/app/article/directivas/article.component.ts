import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{
articles: string[] = [];

constructor(){}

ngOnInit(): void{
  this.articles = this.obtenerArticles();
}

private obtenerArticles(): string[] {
  const articlereturn: string[] = ["primero", "segundo", "tercero"];
  return articlereturn;
}
}
