import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Article1Component } from './article/article1/article1.component';

const routes: Routes = [
  { path: '', redirectTo: "Article1", pathMatch: "full"},
  { path: "Article1", component: Article1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
