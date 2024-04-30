import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor( private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  private mockURl = '../assets/mock/';

  getPortFolioList(filterValues: any) {
    return this.http.get<any>(this.mockURl + 'appointment-list.json');
   // return this.http.get('/appointments?' + this.utilityService.convertObjectToQueryString(filterValues));
  }

  addPortFolio(appointment: any) {
    return this.http.post('/appointments', appointment);
  }

}
