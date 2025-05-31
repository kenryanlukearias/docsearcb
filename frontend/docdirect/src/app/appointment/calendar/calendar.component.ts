import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  days = Array.from({ length: 30 }, (_, i) => i + 1); // 1 to 30
  blanks = Array.from({ length: 4 }); // Assuming June 1 starts on Thursday (4 blanks)
  selectedDay = 6;

  selectDay(day: number) {
    this.selectedDay = day;
  }
}
