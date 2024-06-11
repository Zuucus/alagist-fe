import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  private mockURl = '../assets/mock/';
  private url  = environment.APIURL+'/registration';
  private vendorUrl = environment.APIURL+'/vendors';
  private categoryUrl = environment.APIURL+'/masterData';

  createVendorUrl(data: any) {
    return this.http.post(this.url+'/vendor/emailVerification',data);
  }


  getRegisterOtpUrl(data: any) {
    return this.http.post(this.url+'/vendor/sendOtp',data);
  }

  getBusinessCategoriesUrl() {
    return this.http.get(this.categoryUrl+'/businessCategory');
  }

  updateBusinessCategory(data: any) {
    return this.http.patch(this.vendorUrl+'/businessCategory',data);
  }

  uploadVendorLogo(data: any) {
    return this.http.post(this.vendorUrl+'/uploadVendorLogo',data);
  }

  uploadVendorCover(data: any) {
    return this.http.post(this.vendorUrl+'/uploadCover',data);
  }


}
