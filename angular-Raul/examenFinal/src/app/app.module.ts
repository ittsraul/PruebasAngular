import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CalculadoraComponent,
    UserRegisterComponent,
    ListEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    CaracteristicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
