import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MailHttpService } from './mail-http.service';
import { MailMessage } from './mail-message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {

  editorText: string;

  constructor(private mailHttpService: MailHttpService) {}


  sendMail() {
    const mailMessage: MailMessage = {textMessage: this.editorText};
    this.mailHttpService.sendMessage(mailMessage).subscribe();
  }


}
