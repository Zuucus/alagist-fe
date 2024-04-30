import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formGroup: FormGroup = new FormGroup([]);


  progressBar: boolean = false;
  isOtp: boolean = false;

  login={
    phone: '',
  }
  otp: any;

  constructor(private router:Router,
    private homeService: HomeService,
    private zooMessageService: ZooMessageService
  ) { }

  userLogin(){
    this.isOtp = true;
    this.progressBar = true;
    let data = {
      otp: this.otp,
      userId:1
    }

    this.homeService.verifyOtp(data).subscribe({
      next: (response) => {
        this.progressBar = false;
        this.isOtp = true;
      },
      error: (error) => {
        this.progressBar = false;
        this.zooMessageService.sendError('Invalid OTP');

      }
    });

  }

  userRegister(){
    this.router.navigate(['/register']);
  }


}
