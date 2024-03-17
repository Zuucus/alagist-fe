import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooPickListComponent } from './zoo-pick-list/zoo-pick-list.component';
import { PickListModule } from 'primeng/picklist';

@NgModule({
  declarations: [ZooPickListComponent],
  imports: [CommonModule, PickListModule],
  exports: [ZooPickListComponent],
})
export class ZooPickListModuleModule {}
