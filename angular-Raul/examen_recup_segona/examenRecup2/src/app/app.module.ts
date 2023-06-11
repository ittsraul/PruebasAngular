import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './main/content/content.component';
import { HeaderComponent } from './layout/header/header.component';
import { ViewTwoComponent } from './views/view-two/view-two.component';
import { ContentPokComponent } from '../../../../ejercicios_clase/actividadesPracticas/src/app/content-pok/content-pok.component';
import { ContentChuckComponent } from '../../../../ejercicios_clase/actividadesPracticas/src/app/content-chuck/content-chuck.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewThreeComponent } from '../../../../ejercicios_clase/actividadesPracticas/src/app/view-three/view-three.component';
import { ViewoneComponent } from './views/view-one/view-one.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContentComponent,
    HeaderComponent,
    ViewTwoComponent,
    ViewoneComponent,
    ContentPokComponent,
    ContentChuckComponent,
    ViewThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
