import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooDateComponent } from './zoo-date/zoo-date.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [ZooDateComponent],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    SkeletonModule,
    ReactiveFormsModule,
    TooltipModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ZooDateComponent],
})
export class ZooDateModule {}
