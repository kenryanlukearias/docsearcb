import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register/register-page.component';
import { LoginPageComponent } from './login-user/login-page.component';
import { LoginAdminPageComponent } from './login-admin/login-admin-page.component';

const routes: Routes = [
  { path: 'register', component: RegisterPageComponent },
  { path: 'user-login', component: LoginPageComponent },
  { path: 'admin-login', component: LoginAdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRegRoutingModule { }
