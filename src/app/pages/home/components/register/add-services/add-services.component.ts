import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent {

  baseCurrency: string = 'INR';

  currencyList = ['INR'];

  progressBar: boolean = false;

  public formGroup: FormGroup = new FormGroup([]);

  service: any = {};

}
