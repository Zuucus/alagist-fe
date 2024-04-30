import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  private mockURl = '../assets/mock/';
  private url  = environment.APIURL+'/registration/vendor';

  verifyOtp(data: any) {
    return this.http.post(this.url+'/verifyOtp',data);
  }

}

