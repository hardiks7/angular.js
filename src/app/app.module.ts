import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeDetailComponent } from './components/hero-detail/hero-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetailComponent,
    MessagesComponent,
    CommonModule,
    ServicesComponent,
    HomeComponent,
    HeaderComponent,
    AbortController,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }