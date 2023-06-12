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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewoneComponent } from './views/view-one/view-one.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContentComponent,
    HeaderComponent,
    ViewTwoComponent,
    ViewoneComponent,
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
