import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/directivas/article.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleFormComponent } from './article/article-form/article-form.component';
import { ArticleCardComponent } from './article/article-card/article-card.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ArticleListComponent },
  { path: 'directivas', component: ArticleComponent },
  { path: 'carrito', loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoModule) }, 
  { path: 'catalogo', loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoModule) },
  { path: 'articulo-ficha/:idArticulo', component: ArticleFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
