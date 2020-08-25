import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExperiencePageComponent } from '../pages/experience-page/experience-page.component';

import { environment } from '../environments/environment';
import { ExperienceService } from 'src/services/experience/experience.service';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';
import { ContactService } from 'src/services/contact/contact.service';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ExperiencePageComponent,
    ContactPageComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'nisarg-desai-website'),
    AngularFirestoreModule,
    FormsModule,
    // NgbModule
  ],
  providers: [
    ExperienceService,
    ContactService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
