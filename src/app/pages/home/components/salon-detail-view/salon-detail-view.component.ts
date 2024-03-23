import { Component } from '@angular/core';

@Component({
  selector: 'app-salon-detail-view',
  templateUrl: './salon-detail-view.component.html',
  styleUrls: ['./salon-detail-view.component.scss']
})
export class SalonDetailViewComponent {

  breadCrumbItems:any[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Discover', routerLink: '/home/discover' },
    { label: 'Salon Detail', routerLink: '/home/salon-detail-view' },
  ];

  text =` I was contacted by Best Hair indicating I'd been charged 3 times for virtually the same stuff. You were quick to
  refund, I was impressed. I've received my order and as
  usual- great! `;
  value = 4.5;

  serviceList: any = [{
    name: 'Hair &  Styling',
    image:'assets/images/saloon/serv1.png'
  }, {
    name: 'Nails',
    image:'assets/images/saloon/serv2.png'
  }, {
    name: 'Eyebrow & Lashes',
    image:'assets/images/saloon/serv3.png'
  }, {
    name: 'Massage',
    image:'assets/images/saloon/serv4.png'
  },
  {
    name:'barbering',
    image:'assets/images/saloon/serv5.png'
  },
  {
    name: 'Hair &  Styling',
    image:'assets/images/saloon/serv1.png'
  }, {
    name: 'Nails',
    image:'assets/images/saloon/serv2.png'
  }, {
    name: 'Eyebrow & Lashes',
    image:'assets/images/saloon/serv3.png'
  }
];

  salon:{
    name:string,
    address:string,
    rating:number,
    image:string,
    hours:string,
    ratingCount:number,
    services:any[]
  } = {
    name:'Anlon',
    address:'No 1, Best Hair Street, Best Hair City',
    rating:4.5,
    ratingCount: 1845,
    hours:'9:00am - 6:00pm',

    image:'assets/images/dashboard/salon.png',
    services:[{
      name:'Hair &  Styling',
      image:'assets/images/dashboard/back-view.png'
    }, {
      name:'Nails',
      image:'assets/images/dashboard/nail-care.png'
    }, {
      name:'Eyebrow & Lashes',
      image:'assets/images/dashboard/face.png'
    }, {
      name:'Massage',
      image:'assets/images/dashboard/massage.png'
    },
    {
      name:'barbering',
      image:'assets/images/dashboard/barbering.png'
    }]
  }



}
