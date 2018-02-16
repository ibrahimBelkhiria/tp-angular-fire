import { Component } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


description: Observable<any>;

messages: AngularFireList<any>;
  email: string;
  objet: string;
  text: string;

  msgs: Observable<any[]>;



  constructor(private db: AngularFireDatabase) {

    this.messages = db.list('messages').valueChanges();
      console.log(this.messages);




  }



  addMessage(email, objet, text) {

    console.log(this.email);
    const  mes =  this.messages = this.db.list('messages');

    mes.push(
       {
        email: this.email,
        objet: this.objet,
        text : this.text
       });

  }


  deleteMesg() {
    console.log('delet pressed');
  }









}
