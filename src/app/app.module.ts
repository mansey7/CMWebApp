import { LoginComponent } from './admin/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

var config = {
  apiKey: "AIzaSyA9C6Y8xwWsZ-nIavR7K7K_u0_U-0zN4es",
    authDomain: "finalyearproject-3b5e7.firebaseapp.com",
    databaseURL: "https://finalyearproject-3b5e7.firebaseio.com",
    projectId: "finalyearproject-3b5e7",
    storageBucket: "finalyearproject-3b5e7.appspot.com",
    messagingSenderId: "256853488923",
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
