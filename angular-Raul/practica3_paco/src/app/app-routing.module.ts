import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './views/one/one.component';
import { TwoComponent } from './views/two/two.component';

const routes: Routes = [
  { path: '', redirectTo: 'One', pathMatch: 'full'},
  { path: 'One', component: OneComponent},
  { path: 'Two', component: TwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
