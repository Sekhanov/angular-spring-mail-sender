import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MailHttpService } from '../mail-http.service';
import { MailMessage } from '../mail-message';

@Component({
  selector: 'app-mail-sender',
  templateUrl: './mail-sender.component.html',
  styleUrls: ['./mail-sender.component.css'],
  providers: [MessageService]
})
export class MailSenderComponent implements OnInit {

  editorText = '';

  mailMessageForm: FormGroup;

  constructor(private mailHttpService: MailHttpService) {}

  ngOnInit() {
  }

  sendMail() {
    const mailMessage: MailMessage = {
      textMessage: this.editorText,
      subject: 'my new message',
      fromEmail: 'skhanov@mail.ru',
      toEmail: 's.khanov@agroexpert2007.ru'
    };
    this.mailHttpService.sendMessage(mailMessage).subscribe();
  }

}
