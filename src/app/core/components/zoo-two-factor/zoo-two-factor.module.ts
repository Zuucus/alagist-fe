import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooTwoFactorComponent } from './zoo-two-factor/zoo-two-factor.component';
import { ZooLabelModule } from '../zoo-label/zoo-label.module';
import { ZooInputBoxModule } from '../zoo-input-box/zoo-input-box.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [ZooTwoFactorComponent],
  imports: [
    CommonModule,
    ZooLabelModule,
    ZooInputBoxModule,
    ProgressSpinnerModule,
  ],
})
export class ZooTwoFactorModule {}
