import { Component } from '@angular/core';

@Component({
  selector: 'app-discover-places',
  templateUrl: './discover-places.component.html',
  styleUrls: ['./discover-places.component.scss']
})
export class DiscoverPlacesComponent {

  discoverPlacesList:any[] = [];
  discover:any
  location:any;
  time:any;
  date:any;

  minDate= new Date();


  onSelectDateChange() {
    console.log(this.discover);
  }

  getDiscoverList(event: any) {
    console.log(event);
  }

  OnTimeChange(event: any) {
    console.log(event);
  }

}
