import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleFormComponent } from './article/article-form/article-form.component';
import { ArticleComponent } from './article/directivas/article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleCardComponent } from './article/article-card/article-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleListComponent,
    ArticleFormComponent,
    ArticleComponent,
    ArticleCardComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
