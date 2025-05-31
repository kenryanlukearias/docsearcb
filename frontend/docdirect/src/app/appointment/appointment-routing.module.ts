import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user/user-page.component';
import { AdminPageComponent } from './admin/admin-page.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';

const routes: Routes = [
  { path: 'user-page', component: UserLandingComponent },
  { path: 'admin-page', component: AdminLandingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
