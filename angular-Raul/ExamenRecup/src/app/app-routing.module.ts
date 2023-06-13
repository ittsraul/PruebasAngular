import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewOneComponent } from './views/view-one/view-one.component';
import { ViewTwoComponent } from './views/view-two/view-two.component';
import { ViewThreeComponent } from './views/view-three/view-three.component';

const routes: Routes = [
  { path: '', redirectTo:'viewOne', pathMatch: 'full'},
  { path:'viewOne', component: ViewOneComponent},
  { path:'viewTwo', component: ViewTwoComponent},
  { path: 'viewThree', component: ViewThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
