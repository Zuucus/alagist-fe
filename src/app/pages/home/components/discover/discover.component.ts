import { Component } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent {

  discoverList: any = [];
  discover: any;

  text =` I was contacted by Best Hair indicating I'd been charged 3 times for virtually the same stuff. You were quick to
  refund, I was impressed. I've received my order and as
  usual- great! `;

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
  }
];


  getDiscoverList(event: any) {
    console.log(event);
  }

}
