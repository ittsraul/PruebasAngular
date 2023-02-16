import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './views/calculadora/calculadora.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { CaracteristicasComponent } from './views/caracteristicas/caracteristicas.component';
import { UserRegisterComponent } from './views/user-register/user-register.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { ListEmployeeComponent } from './views/list-employee/list-employee.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'calculadora', pathMatch: 'full' }, 
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'list-employee', component: ListEmployeeComponent },
  { path: 'caracteristicas', component: CaracteristicasComponent },
  { path: 'pokemon', component: PokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
