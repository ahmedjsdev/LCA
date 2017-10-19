import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  getAppTest () {
    return this.db.list('items');
  }
  addItems () {
    const itemsRef = this.db.list('items');
    itemsRef.push({ name: 'newName' });
  }
}
