import { Publisher, OrderCreatedEvent, Subjects } from '@bc96tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
