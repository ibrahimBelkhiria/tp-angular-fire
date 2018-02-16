import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

const config = {
  apiKey: "AIzaSyAa1I5rTye6KM_66ahFJXiFRbc-hoEqTvo",
  authDomain: "tp-angularfire-d0423.firebaseapp.com",
  databaseURL: "https://tp-angularfire-d0423.firebaseio.com",
  projectId: "tp-angularfire-d0423",
  storageBucket: "tp-angularfire-d0423.appspot.com",
  messagingSenderId: "1066845910160"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
