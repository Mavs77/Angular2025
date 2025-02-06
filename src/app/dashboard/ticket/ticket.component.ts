import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { SingleTicketComponent } from './singleticket/singleticket.component';

@Component({
  selector: 'app-ticket',
  imports: [NewTicketComponent, SingleTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open',
    };

    this.tickets.push(ticket);
  }

  onCloseTicket(id: String) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
