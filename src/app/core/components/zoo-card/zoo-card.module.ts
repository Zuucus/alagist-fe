import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooCardComponent } from './zoo-card/zoo-card.component';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [
    ZooCardComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    ZooCardComponent
  ]
})
export class ZooCardModule { }
