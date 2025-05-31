import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/nav/navbar.component';
import { FooterPageComponent } from '../../shared/footer/footer-page.component';
import { CalendarComponent } from "../calendar/calendar.component";
import { DoctorsUsersComponent } from "../doctors-users/doctors-users.component";

@Component({
  selector: 'app-user-page',
  imports: [NavbarComponent, FooterPageComponent, CalendarComponent, DoctorsUsersComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent {

}
