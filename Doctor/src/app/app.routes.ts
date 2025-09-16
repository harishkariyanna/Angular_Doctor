import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DoctorcomComponent } from './doctorcom/doctorcom';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'doctors', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'doctors',
    component: DoctorcomComponent,
    canActivate: [authGuard]
  }
];
