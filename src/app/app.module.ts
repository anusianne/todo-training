import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponentModule } from 'projects/nav/src/lib/adapters/primary/ui/navbar.component-module';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire'
import { AboutUsPageModule } from './pages/about-us.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { EmployeeDetailComponentModule } from 'projects/team/src/lib/adapters/primary/ui/employee-detail.component-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponentModule,
    AngularFireModule.initializeApp(environment.firestoreConfig),
    AboutUsPageModule,
    EmployeeDetailsPageModule,
    EmployeeDetailComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
