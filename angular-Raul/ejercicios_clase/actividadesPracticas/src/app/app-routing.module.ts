import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewThreeComponent } from './view-three/view-three.component';
import { ContentChuckComponent } from './content-chuck/content-chuck.component';
import { ContentPokComponent } from './content-pok/content-pok.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
