import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ZooMessageService {
  private subject = new Subject<any>();

  sendMessage(message: IZooMessage) {
    this.subject.next(message);
  }

  clearMessages() {
    this.subject.next(null);
  }

  onMessage(): Observable<IZooMessage> {
    return this.subject.asObservable();
  }

  sendError(message: string) {
    this.subject.next({
      to: 'toast',
      message: {
        key: 'toast',
        severity: 'error',
        summary: 'Error',
        detail: message,
      },
    });
  }

  sendSuccess(message: string) {
    this.subject.next({
      to: 'toast',
      message: {
        key: 'toast',
        severity: 'success',
        summary: 'Success',
        detail: message,
      },
    });
  }

  sendInfo(message: string) {
    this.subject.next({
      to: 'toast',
      message: {
        key: 'toast',
        severity: 'info',
        summary: 'Info',
        detail: message,
      },
    });
  }

  sendWarning(message: string) {
    this.subject.next({
      to: 'toast',
      message: {
        key: 'toast',
        severity: 'warn',
        summary: 'Warning',
        detail: message,
      },
    });
  }

  sendConfirm(header: string, message: string, callback: any) {
    this.subject.next({
      to: 'confirmDialog',
      message: {
        key: 'confirmDialog',
        header,
        message,
        accept: callback,
      },
    });
  }
}

export interface IZooMessage {
  to: string;
  message: any;
  target?: any;
}
