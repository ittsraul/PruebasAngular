import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent {
  @Input() article?: Article;
  @Input() textoBoton?: string = "click me";
  @Input() isFavorite?: boolean = false;
  @Output() click: EventEmitter<number> = new EventEmitter<number>();
  @Output() view: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickFavorite: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public onView(): void {
    this.view.emit(this.article?.getId());
  }

  public onClickFavorite(): void {
    this.clickFavorite.emit();
  }

  public isOnSale(): boolean {
    return this.article?.getOldPrice() !== undefined && this.article?.getOldPrice() > this.article?.getPrice();
  }

  public getFormattedPrice(price: number): string {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(price);
  }
}