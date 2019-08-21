import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MailMessage } from './mail-message';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MailHttpService {

  sendMailUrl = 'http://localhost:8080/mail';

  constructor(private http: HttpClient) { }

  sendMessage(mailMessage: MailMessage) {
    return this.http.post<MailMessage>(this.sendMailUrl, mailMessage, httpOptions);
  }

}
