import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerNewComponent } from './components/customer-new/customer-new.component';
import { ZooAutocompleteModule } from 'src/app/core/components/zoo-autocomplete/zoo-autocomplete.module';
import { ZooButtonModule } from 'src/app/core/components/zoo-button/zoo-button.module';
import { ZooCardModule } from 'src/app/core/components/zoo-card/zoo-card.module';
import { ZooDateModule } from 'src/app/core/components/zoo-date/zoo-date.module';
import { ZooLabelModule } from 'src/app/core/components/zoo-label/zoo-label.module';
import { ZooPageModule } from 'src/app/core/components/zoo-page/zoo-page.module';
import { ZooTableModule } from 'src/app/core/components/zoo-table/zoo-table.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ZooInputBoxModule } from 'src/app/core/components/zoo-input-box/zoo-input-box.module';
import { ZooSelectModule } from 'src/app/core/components/zoo-select/zoo-select.module';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerNewComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ZooPageModule,
    ZooTableModule,
    ZooButtonModule,
    ZooCardModule,
    ZooLabelModule,
    ZooDateModule,
    ZooInputBoxModule,
    ZooSelectModule,
    ZooAutocompleteModule,
  ],
  providers: [TitleCasePipe, DatePipe, DialogService, DynamicDialogRef],
})
export class CustomerModule { }
