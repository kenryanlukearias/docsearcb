import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterLink,
    RouterOutlet
  ]
})
export class HomeModule {
  // private apiUrl = 'https://api.openai.com/v1/chat/completions';
  // private apiKey = 'YOUR_OPENAI_API_KEY'; // Store securely in production

  // constructor(private http: HttpClient) {}

  // sendMessage(message: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.apiKey}`
  //   });

  //   const body = {
  //     model: 'gpt-3.5-turbo', // or gpt-4 if you have access
  //     messages: [{ role: 'user', content: message }]
  //   };

  //   return this.http.post(this.apiUrl, body, { headers });
  // }
}