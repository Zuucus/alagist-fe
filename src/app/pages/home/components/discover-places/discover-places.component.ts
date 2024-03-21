import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover-places',
  templateUrl: './discover-places.component.html',
  styleUrls: ['./discover-places.component.scss']
})
export class DiscoverPlacesComponent {

  constructor(private router:Router) { }

  discoverPlacesList:any[] = [];
  discover:any
  location:any;
  time:any;
  date:any;

  minDate= new Date();


  serviceList: any = [{
    name: 'Hair &  Styling',
    image:'assets/images/dashboard/back-view.png'
  }, {
    name: 'Nails',
    image:'assets/images/dashboard/nail-care.png'
  }, {
    name: 'Eyebrow & Lashes',
    image:'assets/images/dashboard/face.png'
  }, {
    name: 'Massage',
    image:'assets/images/dashboard/massage.png'
  },
  {
    name:'barbering',
    image:'assets/images/dashboard/barbering.png'
  },
  {
    name: 'Hair &  Styling',
    image:'assets/images/dashboard/back-view.png'
  }, {
    name: 'Nails',
    image:'assets/images/dashboard/nail-care.png'
  }, {
    name: 'Eyebrow & Lashes',
    image:'assets/images/dashboard/face.png'
  }, {
    name: 'Massage',
    image:'assets/images/dashboard/massage.png'
  },
  {
    name:'barbering',
    image:'assets/images/dashboard/barbering.png'
  },
  {
    name: 'Hair &  Styling',
    image:'assets/images/dashboard/back-view.png'
  }, {
    name: 'Nails',
    image:'assets/images/dashboard/nail-care.png'
  }, {
    name: 'Eyebrow & Lashes',
    image:'assets/images/dashboard/face.png'
  }, {
    name: 'Massage',
    image:'assets/images/dashboard/massage.png'
  },
  {
    name:'barbering',
    image:'assets/images/dashboard/barbering.png'
  }
];


  onSelectDateChange() {
    console.log(this.discover);
  }

  getDiscoverList(event: any) {
    console.log(event);
  }

  OnTimeChange(event: any) {
    console.log(event);
  }

  viewSalon(){
    this.router.navigate(['/salon-detail-view']);

  }

}
