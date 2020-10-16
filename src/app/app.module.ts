import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import {FormsModule} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { JobPostingComponent } from './job-posting/job-posting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobPostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClient,
    HttpParams
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
