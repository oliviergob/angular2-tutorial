// ====== ./app/app.routes.ts ======
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent }           from './basic.component';
import { SensitiveComponent }       from './sensitive.component';
import { LoginComponent }           from './login.component';
import { ChangePasswordComponent }  from './change-password.component';
import { RegisterComponent }        from './register.component';

// Route Configuration
const appRoutes: Routes = [
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'sensitive', component: SensitiveComponent },
  { path: 'login', component: LoginComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'registerUser', component: RegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
