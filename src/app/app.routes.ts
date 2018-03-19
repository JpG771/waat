import { Routes } from '@angular/router';
import { CreateAlarmComponent } from './alarm';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      redirectTo: '/alarms/new', pathMatch: 'full'},
  { path: 'alarms/new',  component: CreateAlarmComponent },
  { path: 'about', component: AboutComponent },
  { path: '**',    component: NoContentComponent },
];
