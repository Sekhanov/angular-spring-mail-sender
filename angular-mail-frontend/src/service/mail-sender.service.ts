import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MailMessage } from 'src/dto/MailMessage';

@Injectable({
  providedIn: 'root'
})
export class MailSenderService {

  baseUrl = 'http://localhost:8080/mail';

  constructor(private http: HttpClient) { }

  sendMail(mailMessage: MailMessage): Observable<MailMessage> {
    return this.http.post<MailMessage>(this.baseUrl, mailMessage);
  }

}
