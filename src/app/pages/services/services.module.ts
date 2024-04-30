import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ZooPageModule } from 'src/app/core/components/zoo-page/zoo-page.module';
import { ZooTableModule } from 'src/app/core/components/zoo-table/zoo-table.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ZooButtonModule } from 'src/app/core/components/zoo-button/zoo-button.module';
import { ServicesNewComponent } from './components/services-new/services-new.component';
import { ZooAutocompleteModule } from 'src/app/core/components/zoo-autocomplete/zoo-autocomplete.module';
import { ZooDateModule } from 'src/app/core/components/zoo-date/zoo-date.module';
import { ZooLabelModule } from 'src/app/core/components/zoo-label/zoo-label.module';
import { ZooCardModule } from 'src/app/core/components/zoo-card/zoo-card.module';
import { ZooInputBoxModule } from 'src/app/core/components/zoo-input-box/zoo-input-box.module';


@NgModule({
  declarations: [
    ServiceListComponent,
    ServicesNewComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ZooPageModule,
    ZooTableModule,
    ZooButtonModule,
    ZooInputBoxModule,
    ZooLabelModule,
    ZooDateModule,
    ZooAutocompleteModule,
    ZooCardModule
  ],
  providers: [TitleCasePipe, DatePipe, DialogService, DynamicDialogRef],
})
export class ServicesModule { }
