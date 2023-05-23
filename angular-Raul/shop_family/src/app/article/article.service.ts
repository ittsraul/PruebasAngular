import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArticleInteface } from './article.inteface';
import { ArticleDetail } from './articulodetail.model';
import { ArticleDetailInterface } from './articledetail.interface';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http :HttpClient) { }
  
  public getArticles () :Article[] {
    const articleToReturn: Article[] = [];

    /* for (let i = 0; i < 10; i++) {
      const articulos: Article = new Article(i,("Article" + i), ("Juan" + i), 120);
      articleToReturn.push(articulos);
    }
    return articleToReturn; */
    const zapatalla01: Article = new Article(1, ("Converse"),("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxX4QGY8GWOQzFYCzgtPkIijin179l94O4A&usqp=CAU"), "Zapatos",  55, 55);
    articleToReturn.push(zapatalla01);

    const zapatalla02: Article = new Article(1, ("Nike"),("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxX4QGY8GWOQzFYCzgtPkIijin179l94O4A&usqp=CAU"), "Zapatos", 55, 70);
    articleToReturn.push(zapatalla02);

    const zapatalla03: Article = new Article(1, ("Adidas"),("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxX4QGY8GWOQzFYCzgtPkIijin179l94O4A&usqp=CAU"),"Zapatos", 55, 63);
    articleToReturn.push(zapatalla03);

    return articleToReturn;
  }

  public getArticlesApi(): Observable<ArticleInteface[]> {
    const urlEndPoint: string = "http://localhost:3001/articles";
    return this.http.get<ArticleInteface[]>(urlEndPoint);
  }

  public getDetailArticle(id: number): Observable<ArticleDetailInterface> {
    const articulosFicha: string = `http://localhost:3001/articulo-ficha/${id}`;
    return this.http.get<ArticleDetailInterface>(articulosFicha);
  }
}
