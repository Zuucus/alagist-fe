import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ZooTwoFactorComponent } from '../components/zoo-two-factor/zoo-two-factor/zoo-two-factor.component';
import { UsersService } from 'src/app/pages/users/services/users.service';
import { ZooMessageService } from './zoo-message.service';

@Injectable({
  providedIn: 'root',
})
export class ZooTwoFactorService {
  constructor(
    public dialogService: DialogService,
    public dialogRef: DynamicDialogRef,
    public userService: UsersService,
    private zooMessageService: ZooMessageService
  ) {}

  async isAuntenticated(): Promise<boolean> {
    if (this.isAuthEnabled()) {
      this.dialogRef = this.dialogService.open(ZooTwoFactorComponent, {
        header: 'Authentication',
        width: '20%',
        height: '30%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: false,
        position: 'center',
        data: {
          type: 'myCode',
        },
      });
      return new Promise<boolean>((resolve) => {
        this.dialogRef.onClose.subscribe((result) => {
          if (result) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    } else {
      this.zooMessageService.sendMessage({
        to: 'toast',
        message: {
          key: 'toast',
          severity: 'error',
          summary: 'Error',
          detail: 'Two factor authentication is not enabled',
        },
      });
      return false;
    }
  }

  async isUserAuntenticated(user_id: number): Promise<boolean> {
    this.dialogRef = this.dialogService.open(ZooTwoFactorComponent, {
      header: 'Authentication',
      width: '20%',
      height: '30%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      position: 'center',
      data: {
        type: 'userCode',
        user_id: user_id,
      },
    });
    return new Promise<boolean>((resolve) => {
      this.dialogRef.onClose.subscribe((result) => {
        if (result) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  isAuthEnabled() {
    let isAuthEnabled = false;
    this.userService.myInfo$.subscribe((user) => {
      isAuthEnabled =
        user?.two_factor_secret !== null &&
        user?.two_factor_secret !== undefined;
    });
    return isAuthEnabled;
  }
}
