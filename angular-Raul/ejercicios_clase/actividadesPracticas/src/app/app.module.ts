import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViewThreeComponent } from './view-three/view-three.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentChuckComponent } from './content-chuck/content-chuck.component';
import { ContentPokComponent } from './content-pok/content-pok.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ViewThreeComponent,
    ContentChuckComponent,
    ContentPokComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
