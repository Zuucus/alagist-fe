import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  constructor(  private http: HttpClient,
    private utilityService: UtilityService
  ) { }

  private mockURl = '../assets/mock/';

  getEmployeeList(filterValues: any) {
    return this.http.get<any>(this.mockURl + 'appointment-list.json');
   // return this.http.get('/appointments?' + this.utilityService.convertObjectToQueryString(filterValues));
  }

  addEmployee(employee: any) {
    return this.http.post('/employees', employee);
  }
}
