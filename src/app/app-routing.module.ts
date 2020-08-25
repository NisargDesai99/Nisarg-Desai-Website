import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { HomePageComponent } from 'src/pages/home-page/home-page.component';
import { ExperiencePageComponent } from 'src/pages/experience-page/experience-page.component';
import { ContactPageComponent } from 'src/pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, data: { page: 'home' }},
  { path: 'experience', component: ExperiencePageComponent, data: { page: 'experience' }},
  { path: 'contact', component: ContactPageComponent, data: { page: 'contact' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
