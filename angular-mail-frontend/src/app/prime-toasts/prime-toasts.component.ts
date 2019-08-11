import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-prime-toasts',
  templateUrl: './prime-toasts.component.html',
  styleUrls: ['./prime-toasts.component.css'],
  providers: [MessageService]
})
export class PrimeToastsComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  showToast() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  }

}
