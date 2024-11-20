import { Publisher, OrderCancelledEvent, Subjects } from '@bc96tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
