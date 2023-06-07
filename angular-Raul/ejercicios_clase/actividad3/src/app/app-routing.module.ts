import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './main/journal/journal.component';

const routes: Routes = [
  {path: '', redirectTo: 'Journal', pathMatch: 'full'},
  {path: 'Journal', component: JournalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
