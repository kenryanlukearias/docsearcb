import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { NavbarComponent } from '../shared/nav/navbar.component';
import { FooterPageComponent } from '../shared/footer/footer-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    NavbarComponent,
    FooterPageComponent
  ]
})
export class AppointmentModule { }
