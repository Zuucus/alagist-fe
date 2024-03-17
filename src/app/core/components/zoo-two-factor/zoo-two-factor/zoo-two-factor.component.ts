import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';
import { ProfileServiceService } from 'src/app/pages/profile/services/profile-service.service';

@Component({
  selector: 'zoo-two-factor',
  templateUrl: './zoo-two-factor.component.html',
  styleUrls: ['./zoo-two-factor.component.scss'],
})
export class ZooTwoFactorComponent implements OnInit {
  progressBar = false;
  code: any;
  isCodeValid = false;
  formGroup: FormGroup = new FormGroup([]);
  constructor(
    private dynamicDialogRef: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private profileService: ProfileServiceService,
    private zooMessageService: ZooMessageService
  ) {}
  codeStr = '';

  ngOnInit(): void {}

  onCodeChange(event: any) {
    //check if code is 6 digits
    this.codeStr = event.value.toString();
    if (this.codeStr.length === 6) {
      if (this.config.data?.type === 'myCode') {
        this.verifyMyCode();
      } else {
        this.verifyUserCode();
      }
    }
  }
  verifyUserCode() {
    this.progressBar = true;
    let data = {
      code: this.codeStr,
      user_id: this.config.data?.user_id,
    };
    this.profileService.verifyUsertwoFactorAuth(data).subscribe({
      next: (res: any) => {
        this.progressBar = false;
        if (res.result === true) {
          this.isCodeValid = true;
          this.zooMessageService.sendMessage({
            to: 'toast',
            message: {
              key: 'toast',
              severity: 'success',
              summary: 'Success',
              detail: 'Code verified',
            },
          });
          setTimeout(() => {
            this.dynamicDialogRef.close(res);
          }, 500);
        } else {
          this.isCodeValid = false;
          this.zooMessageService.sendMessage({
            to: 'toast',
            message: {
              key: 'toast',
              severity: 'error',
              summary: 'Error',
              detail: 'Invalid code',
            },
          });
        }
      },
      error: (error) => {
        this.progressBar = false;
        this.zooMessageService.sendMessage({
          to: 'toast',
          message: {
            key: 'toast',
            severity: 'error',
            summary: 'Error',
            detail: error.error[Object.keys(error.error)[0]],
          },
        });
      },
    });
  }

  verifyMyCode() {
    this.progressBar = true;
    let data = {
      code: this.codeStr,
    };
    this.profileService.verifytwoFactorAuth(data).subscribe({
      next: (res: any) => {
        this.progressBar = false;
        if (res.result === true) {
          this.isCodeValid = true;
          this.zooMessageService.sendMessage({
            to: 'toast',
            message: {
              key: 'toast',
              severity: 'success',
              summary: 'Success',
              detail: 'Code verified',
            },
          });
          setTimeout(() => {
            this.dynamicDialogRef.close(res);
          }, 500);
        } else {
          this.isCodeValid = false;
          this.zooMessageService.sendMessage({
            to: 'toast',
            message: {
              key: 'toast',
              severity: 'error',
              summary: 'Error',
              detail: 'Invalid code',
            },
          });
        }
      },
      error: (error) => {
        this.progressBar = false;
        this.zooMessageService.sendMessage({
          to: 'toast',
          message: {
            key: 'toast',
            severity: 'error',
            summary: 'Error',
            detail: error.error[Object.keys(error.error)[0]],
          },
        });
      },
    });
  }
}
