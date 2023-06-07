import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article/article.component';
import { MenuComponent } from './menu/menu/menu.component';

const routes: Routes = [
  {path: '', redirectTo:'article', pathMatch: 'full'},
  { path: 'article', component: ArticleComponent},
  { path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
