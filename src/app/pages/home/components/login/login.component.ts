import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  constructor() { }

  userLogin(){
    this.isOtp = true;

  }


}
