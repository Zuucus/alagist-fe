import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooDialogComponent } from './zoo-dialog/zoo-dialog.component';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [
    ZooDialogComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [
    ZooDialogComponent
  ]
})
export class ZooDialogModule { }
