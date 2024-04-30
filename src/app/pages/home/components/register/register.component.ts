import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { an } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public formGroup: FormGroup = new FormGroup([]);

  categoryList: any = [];

  progressBar: boolean = false;
  currentStep: number = 2;

  register:any = {
  };

  serviceList: any = [];

  stepItems = [
    {
      label: 'Business Category',
    },
    {
      label: 'Business',
    },
    {
      label: 'Business Hours'
    },
    {
      label: 'Services'
    },
    {
      label: 'Finish'
    }
  ];


  categorySelectionList: any = [
    { name: 'Haircut', key: 'haircut' },
    { name: 'Hair Coloring', key: 'hair_coloring' },
    { name: 'Hair Styling', key: 'hair_styling' },
    { name: 'Manicure', key: 'manicure' },
    { name: 'Pedicure', key: 'pedicure' },
    { name: 'Facial Treatments', key: 'facial_treatments' },
    { name: 'Waxing', key: 'waxing' },
    { name: 'Massage Therapy', key: 'massage_therapy' },
    { name: 'Eyelash Extensions', key: 'eyelash_extensions' },
    { name: 'Makeup Services', key: 'makeup_services' },
    { name: 'Body Wraps', key: 'body_wraps' },
    { name: 'Chemical Peels', key: 'chemical_peels' },
    { name: 'Microdermabrasion', key: 'microdermabrasion' },
    { name: 'Brow Shaping', key: 'brow_shaping' },
    { name: 'Teeth Whitening', key: 'teeth_whitening' }
];

teamSizeList: any = [
  { name: 'Just Me', value: 1 },
  { name: '2-3 Staff Members', value: 1 },
  { name: '4-6 Staff Members', value: 4-6 },
  { name: 'More than 6 Staff Members', value: 7 },
];


  constructor(private router:Router) { }

  getServiceList(val:any){
    console.log(val);
  }

}
