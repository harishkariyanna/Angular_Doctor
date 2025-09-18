import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { DoctorcomComponent } from './doctorcom/doctorcom';
import { DoctorpostComponent } from './doctorpost/doctorpost';
import { authGuard } from './guards/auth-guard';
import { RoleGuard } from './guards/role-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'doctors', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'doctors',
    component: DoctorcomComponent,
    canActivate: [authGuard]
  },
  {
    path: 'doctors/new',
    component: DoctorpostComponent,
    canActivate: [authGuard, RoleGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'doctors/edit/:id',
    component: DoctorpostComponent,
    canActivate: [authGuard, RoleGuard],
    data: { roles: ['Admin'] }
  }
];
