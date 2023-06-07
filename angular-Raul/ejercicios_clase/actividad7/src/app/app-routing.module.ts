import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './views/one/one.component';
import { TwoComponent } from './views/two/two.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'one',pathMatch: 'full'},
  { path:'one', component: OneComponent},
  { path:'home', component: HomeComponent},
  { path:'two', component: TwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
