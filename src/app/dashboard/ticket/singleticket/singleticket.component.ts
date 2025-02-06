import { Component, Input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-SingleTicket',
  imports: [],
  templateUrl: './singleticket.component.html',
  styleUrl: './singleticket.component.css',
})
export class SingleTicketComponent {
  @Input({ required: true }) data!: Ticket;
  close = output();

  detailsVisible = signal(false);

  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
