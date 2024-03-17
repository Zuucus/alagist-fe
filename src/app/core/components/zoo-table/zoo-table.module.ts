import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ZooTableComponent } from './zoo-table/zoo-table.component';
import { ZooButtonModule } from '../zoo-button/zoo-button.module';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { ImageModule } from 'primeng/image';
import { ZooInputBoxModule } from '../zoo-input-box/zoo-input-box.module';
import { ZooDropDownModule } from '../zoo-drop-down/zoo-drop-down.module';
import { ZooDateModule } from '../zoo-date/zoo-date.module';
import { ContextMenuModule } from 'primeng/contextmenu';

@NgModule({
  declarations: [ZooTableComponent],
  imports: [
    CommonModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    SliderModule,
    InputTextModule,
    ButtonModule,
    ZooButtonModule,
    ZooDateModule,
    OverlayPanelModule,
    TooltipModule,
    SkeletonModule,
    ImageModule,
    ZooDropDownModule,
    ZooInputBoxModule,
    ContextMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ZooTableComponent],
})
export class ZooTableModule {}
