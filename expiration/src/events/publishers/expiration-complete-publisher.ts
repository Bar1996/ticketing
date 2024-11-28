import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@bc96tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
