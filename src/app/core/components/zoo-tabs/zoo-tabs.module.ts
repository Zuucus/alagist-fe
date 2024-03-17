import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooTabsComponent } from './zoo-tabs/zoo-tabs.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [ZooTabsComponent],
  imports: [CommonModule, TabViewModule],
  exports: [ZooTabsComponent],
})
export class ZooTabsModule {}
