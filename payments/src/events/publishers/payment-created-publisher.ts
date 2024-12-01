import { Subjects, Publisher, PaymentCreatedEvent } from '@bc96tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
