import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class ZooAuthService {

  constructor(private readonly keycloak: KeycloakService) {
  }


  async getLoggedInProfile(){
    let profile:any={}
    if (await this.keycloak.isLoggedIn()) {
      profile = await this.keycloak.loadUserProfile()
    }
    return profile
  }
}
