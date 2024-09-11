import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PersonalProjectsComponent } from './components/personal-projects/personal-projects.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

export const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'projects', component: PersonalProjectsComponent },
  { path: 'work', component: WorkExperienceComponent },
];
