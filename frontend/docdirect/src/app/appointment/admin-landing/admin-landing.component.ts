import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/nav/navbar.component";
import { FooterPageComponent } from "../../shared/footer/footer-page.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { DoctorsAdminComponent } from "../doctors-admin/doctors-admin.component";
import { AdminPageComponent } from "../admin/admin-page.component";

@Component({
  selector: 'app-admin-landing',
  imports: [NavbarComponent, FooterPageComponent, CalendarComponent, DoctorsAdminComponent, AdminPageComponent],
  templateUrl: './admin-landing.component.html',
  styleUrl: './admin-landing.component.scss'
})
export class AdminLandingComponent {

}
