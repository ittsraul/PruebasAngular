import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './views/employee/employee.component';
import { CalculadoraComponent } from './views/calculadora/calculadora.component';
import { UserRegisterComponent } from './views/user-register/user-register.component';
import { ListEmployeeComponent } from './views/list-employee/list-employee.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CaracteristicasComponent } from './views/caracteristicas/caracteristicas.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './components/content/content.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CalculadoraComponent,
    UserRegisterComponent,
    ListEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    CaracteristicasComponent,
    PokemonComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
