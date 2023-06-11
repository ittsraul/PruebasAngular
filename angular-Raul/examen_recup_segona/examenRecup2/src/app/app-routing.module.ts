import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewoneComponent } from './views/view-one/view-one.component';
import { ViewTwoComponent } from './views/view-two/view-two.component';
import { ContentComponent } from './main/content/content.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'viewOne', component: ViewoneComponent },
  { path: 'viewTwo', component: ViewTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
