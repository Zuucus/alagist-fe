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


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    DashboardComponent
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
    TagModule,
    AvatarModule,
    AvatarGroupModule

  ]
})
export class HomeModule { }
