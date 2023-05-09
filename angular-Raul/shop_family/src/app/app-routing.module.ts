import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/directivas/article.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleFormComponent } from './article/article-form/article-form.component';
import { HomeComponent } from './layout/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {path: 'articulo', component: ArticleListComponent },
  { path: 'directivas', component: ArticleComponent },
  { path: 'carrito', loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoModule) },
  { path: 'articulo-ficha/:idArticulo', component: ArticleFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
