import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ZooLabelModule } from 'src/app/core/components/zoo-label/zoo-label.module';
import { ZooCardModule } from 'src/app/core/components/zoo-card/zoo-card.module';
import { ImageModule } from 'primeng/image';
import { LoginComponent } from './components/login/login.component';
import { ZooInputBoxModule } from 'src/app/core/components/zoo-input-box/zoo-input-box.module';
import { ZooButtonModule } from 'src/app/core/components/zoo-button/zoo-button.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ZooPageModule } from 'src/app/core/components/zoo-page/zoo-page.module';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DiscoverComponent } from './components/discover/discover.component';
import { ZooAutocompleteModule } from 'src/app/core/components/zoo-autocomplete/zoo-autocomplete.module';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { DiscoverPlacesComponent } from './components/discover-places/discover-places.component';
import { ZooDateModule } from 'src/app/core/components/zoo-date/zoo-date.module';
import { SalonDetailViewComponent } from './components/salon-detail-view/salon-detail-view.component';
import { ChipModule } from 'primeng/chip';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { RegisterComponent } from './components/register/register.component';
import { StepsModule } from 'primeng/steps';
import { ZooCheckboxModule } from 'src/app/core/components/zoo-checkbox/zoo-checkbox.module';
import { ZooDropDownModule } from 'src/app/core/components/zoo-drop-down/zoo-drop-down.module';
import { AddServicesComponent } from './components/register/add-services/add-services.component';
import { MessageService } from 'primeng/api';
import { ZooImageUploadModule } from 'src/app/core/components/zoo-image-upload/zoo-image-upload.module';
import { ZooImageResizerModule } from 'src/app/core/components/zoo-image-resizer/zoo-image-resizer.module';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    DiscoverComponent,
    HomeFooterComponent,
    DiscoverPlacesComponent,
    SalonDetailViewComponent,
    RegisterComponent,
    AddServicesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ZooLabelModule,
    ZooCardModule,
    ImageModule,
    ZooLabelModule,
    ZooInputBoxModule,
    ZooButtonModule,
    ZooPageModule,
    ZooAutocompleteModule,
    ZooDateModule,
    ZooImageUploadModule,
    ZooImageResizerModule,
    ZooCheckboxModule,
    TagModule,
    AvatarModule,
    AvatarGroupModule,
    ChipModule,
    RatingModule,
    FormsModule,
    DividerModule,
    StepsModule,
    ZooCheckboxModule,
    ZooDropDownModule
  ],
  providers: [MessageService]
})
export class HomeModule { }
