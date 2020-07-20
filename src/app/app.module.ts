import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { YoutubeService } from './services/youtube/youtube.service';
import { HomeComponent } from './pages/home/home.component';
import { TechnicalService } from './services/technical/technical.service';
import { PostsComponent } from './pages/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //HttpClient
  ],
  providers: [
    HttpClient,
    YoutubeService,
    TechnicalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
