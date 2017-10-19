import { Component } from '@angular/core';
import { FirebaseService } from './providers/firebase.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor (private _firebase: FirebaseService) {
      this._firebase.getAppTest();
  }
  clickMe() {
    this._firebase.addItems();
  }
}
