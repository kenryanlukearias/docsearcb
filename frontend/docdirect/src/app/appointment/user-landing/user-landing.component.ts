import { Component } from '@angular/core';
import { CalendarComponent } from "../calendar/calendar.component";
import { DoctorsUsersComponent } from "../doctors-users/doctors-users.component";
import { FooterPageComponent } from "../../shared/footer/footer-page.component";
import { NavbarComponent } from "../../shared/nav/navbar.component";
import { UserPageComponent } from "../user/user-page.component";

@Component({
  selector: 'app-user-landing',
  imports: [CalendarComponent, DoctorsUsersComponent, FooterPageComponent, NavbarComponent, UserPageComponent],
  templateUrl: './user-landing.component.html',
  styleUrl: './user-landing.component.scss'
})
export class UserLandingComponent {

}
