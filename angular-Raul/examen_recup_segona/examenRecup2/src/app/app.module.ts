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
import { ViewOneComponent } from './views/view-one/view-one.component';
import { ViewTwoComponent } from './views/view-two/view-two.component';
import { ContentPokComponent } from './main/content-pok/content-pok.component';
import { ContentChuckComponent } from './main/content-chuck/content-chuck.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewThreeComponent } from './views/view-three/view-three.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContentComponent,
    HeaderComponent,
    ViewOneComponent,
    ViewTwoComponent,
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
