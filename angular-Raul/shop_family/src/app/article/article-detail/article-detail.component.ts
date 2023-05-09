import { Component,OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ArticleDetail } from '../articulodetail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})export class ArticleDetailComponent implements OnInit {
  articleDetail: ArticleDetail = new ArticleDetail(0, '', '', 0, ''); // Asignar un valor inicial

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getDetailArticle().subscribe(response => {
      const articleDetailInterface = response[0]; // Suponemos que la respuesta es un array con un solo elemento
      this.articleDetail = new ArticleDetail(
        articleDetailInterface.id,
        articleDetailInterface.title,
        articleDetailInterface.image,
        articleDetailInterface.price,
        articleDetailInterface.size
      );
    });
  }
}