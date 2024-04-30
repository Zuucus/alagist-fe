import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  private mockURl = '../assets/mock/';
  private url  = environment.APIURL+'/customer/customer';

  getMyInfo() {
    return this.http.get(this.url);
  }

}

