import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, TitleCasePipe } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { ZooPageComponent } from 'src/app/core/components/zoo-page/zoo-page/zoo-page.component';
import { ZooPageModule } from 'src/app/core/components/zoo-page/zoo-page.module';
import { ZooTableModule } from 'src/app/core/components/zoo-table/zoo-table.module';
import { ZooButtonModule } from 'src/app/core/components/zoo-button/zoo-button.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PortfolioNewComponent } from './components/portfolio-new/portfolio-new.component';
import { ZooLabelModule } from 'src/app/core/components/zoo-label/zoo-label.module';
import { ZooInputBoxModule } from 'src/app/core/components/zoo-input-box/zoo-input-box.module';
import { ZooAutocompleteModule } from 'src/app/core/components/zoo-autocomplete/zoo-autocomplete.module';
import { ZooCardModule } from 'src/app/core/components/zoo-card/zoo-card.module';
import { ZooImageResizerModule } from 'src/app/core/components/zoo-image-resizer/zoo-image-resizer.module';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    PortfolioListComponent,
    PortfolioNewComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ZooPageModule,
    ZooTableModule,
    ZooButtonModule,
    ZooLabelModule,
    ZooInputBoxModule,
    ZooAutocompleteModule,
    ZooCardModule,
    ZooPageModule,
    ZooImageResizerModule,
    ButtonModule
  ],
  providers: [TitleCasePipe, DatePipe, DialogService, DynamicDialogRef],
})
export class PortfolioModule { }
