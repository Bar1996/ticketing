import { Publisher, Subjects, TicketUpdatedEvent } from '@bc96tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
