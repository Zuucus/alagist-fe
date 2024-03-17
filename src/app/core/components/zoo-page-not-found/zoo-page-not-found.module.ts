import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooPageNotFoundComponent } from './zoo-page-not-found/zoo-page-not-found.component';
import { ZooLabelModule } from '../zoo-label/zoo-label.module';
import { ZooButtonModule } from '../zoo-button/zoo-button.module';

@NgModule({
  declarations: [ZooPageNotFoundComponent],
  imports: [CommonModule, ZooLabelModule, ZooButtonModule],
})
export class ZooPageNotFoundModule {}
