import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// firebase setup
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from "angularfire2/database";
import { environment } from '../environments/environment'

import { AppComponent } from './app.component';


// Firebase Service 
import { FirebaseService } from '../app/providers/firebase.service';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [FirebaseService, AngularFireDatabase], 
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
