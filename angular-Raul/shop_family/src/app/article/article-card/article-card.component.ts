import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Input() article?: Article;
  @Input() textoBoton?: string ="click me";
  @Output() click: EventEmitter<number> = new EventEmitter<number>();

  constructor(){}

  ngOnInit() :void {

  }

  @Output() view: EventEmitter<number> = new EventEmitter<number>();

  public onView(): void {
    this.view.emit(this.article?.getId());
  }
}
