import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MailHttpService } from './mail-http.service';
import { MailMessage } from './mail-message';


@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  <app-mail-sender></app-mail-sender>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}





}
