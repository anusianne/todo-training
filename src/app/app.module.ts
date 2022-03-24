import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentModule } from '@navigation';
import { AngularFireModule} from '@angular/fire';


const firebaseConfig = {
  apiKey: "AIzaSyBdPtI69OJB3kyF9g6TCVjVK3Rs4ykL9ng",
  authDomain: "lowgular-course-3e18e.firebaseapp.com",
  projectId: "lowgular-course-3e18e",
  storageBucket: "lowgular-course-3e18e.appspot.com",
  messagingSenderId: "771810143888",
  appId: "1:771810143888:web:8799ab6a4cd7698b703215"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    AppRoutingModule,
    NavbarComponentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
