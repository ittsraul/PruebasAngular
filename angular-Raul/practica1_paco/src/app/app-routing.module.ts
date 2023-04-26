import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Article1Component } from './article/article1/article1.component';
import { Article2Component } from './article/article2/article2.component';
const routes: Routes = [
  { path: '', redirectTo: "Article1", pathMatch: "full"},
  { path: "Article1", component: Article1Component },
  { path: "Article2", component: Article2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
