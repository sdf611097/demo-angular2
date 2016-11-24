import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';

const config = {
    apiKey: "AIzaSyCPDJ5KU3WYhU-56C3Cd-a-tAJQBl5Dra8",
    authDomain: "mytestproject-f7c75.firebaseapp.com",
    databaseURL: "https://mytestproject-f7c75.firebaseio.com",
    storageBucket: "mytestproject-f7c75.appspot.com",
    messagingSenderId: "171290171890"
  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
