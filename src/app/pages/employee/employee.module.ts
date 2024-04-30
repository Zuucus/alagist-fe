import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeLisitComponent } from './components/employee-lisit/employee-lisit.component';
import { ZooPageModule } from 'src/app/core/components/zoo-page/zoo-page.module';
import { ZooTableModule } from 'src/app/core/components/zoo-table/zoo-table.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ZooButtonModule } from 'src/app/core/components/zoo-button/zoo-button.module';
import { EmployeeNewComponent } from './components/employee-new/employee-new.component';
import { ZooCardModule } from 'src/app/core/components/zoo-card/zoo-card.module';
import { ZooInputBoxModule } from 'src/app/core/components/zoo-input-box/zoo-input-box.module';
import { ZooAutocompleteModule } from 'src/app/core/components/zoo-autocomplete/zoo-autocomplete.module';
import { ZooLabelModule } from 'src/app/core/components/zoo-label/zoo-label.module';
import { ZooDateModule } from 'src/app/core/components/zoo-date/zoo-date.module';
import { ZooSelectModule } from 'src/app/core/components/zoo-select/zoo-select.module';


@NgModule({
  declarations: [
    EmployeeLisitComponent,
    EmployeeNewComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ZooPageModule,
    ZooTableModule,
    ZooButtonModule,
    ZooCardModule,
    ZooInputBoxModule,
    ZooAutocompleteModule,
    ZooLabelModule,
    ZooDateModule,
    ZooSelectModule
  ],
  providers: [TitleCasePipe, DatePipe, DialogService, DynamicDialogRef],
})
export class EmployeeModule { }
