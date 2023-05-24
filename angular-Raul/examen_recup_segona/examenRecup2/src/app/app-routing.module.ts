import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOneComponent } from './views/view-one/view-one.component';
import { ViewTwoComponent } from './views/view-two/view-two.component';
import { ContentComponent } from './main/content/content.component';

const routes: Routes = [
  { path: '', redirectTo: 'viewOne', pathMatch: 'full'},
  { path: 'viewOne', component: ViewOneComponent },
  { path: 'content', component: ContentComponent },
  { path: 'viewTwo', component: ViewTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
