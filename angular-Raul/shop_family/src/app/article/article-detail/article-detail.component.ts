import { Component,OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ArticleDetail } from '../articulodetail.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDetailInterface } from '../articledetail.interface';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  articleDetail!: ArticleDetailInterface;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.articleService.getDetailArticle(id).subscribe(
      data => {
        this.articleDetail = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}