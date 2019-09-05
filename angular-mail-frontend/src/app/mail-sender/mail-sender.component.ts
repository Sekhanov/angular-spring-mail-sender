import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MailHttpService } from '../mail-http.service';
import { MailMessage } from '../mail-message';

@Component({
  selector: 'app-mail-sender',
  templateUrl: './mail-sender.component.html',
  styleUrls: ['./mail-sender.component.css']
})
export class MailSenderComponent implements OnInit {

  mailMessageForm: FormGroup;
  mailMessage: MailMessage;




  constructor(private mailHttpService: MailHttpService) {
    this.mailMessage = new MailMessage();
    this.mailMessage.fromEmail = 'sekhanov@gmail.com';
  }

  ngOnInit() {
    this.mailMessageForm = new FormGroup({
      toEmailList: new FormControl(this.mailMessage.toEmailList, [Validators.required]),
      subject: new FormControl(this.mailMessage.subject,
        Validators.required),
      textMessage: new FormControl(this.mailMessage.textMessage,
        Validators.required)
    });
  }

  sendMail() {
    this.mailHttpService.sendMessage(this.mailMessage).subscribe();
  }

}
