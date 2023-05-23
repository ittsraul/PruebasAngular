import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTwoComponent } from './views/view-two/view-two.component';
import { ViewOneComponent } from './views/view-one/view-one.component';
import { ContentComponent } from './main/content/content.component';
import { FormComponent } from './main/form/form.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch:'full'},
  { path: 'one', component: ViewOneComponent },
  { path: 'two', component: ViewTwoComponent },
  { path: 'form', component: FormComponent },
  { path: 'content', component: ContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
