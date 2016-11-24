import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  messages;
  name: string = '';
  message: string = '';
  constructor(private af: AngularFire) {
    this.messages = af.database.list('/messages');
  }
  add() {
    this.messages.push({
      name: this.name,
      text: this.message
    });
    this.name = '';
    this.message = '';
  }

}
