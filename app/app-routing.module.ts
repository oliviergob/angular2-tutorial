// ====== ./app/app.routes.ts ======
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './basic.component';
import { LoginComponent } from './login.component';

// Route Configuration
const appRoutes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'login', component: LoginComponent }
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
