import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooLabelWrapComponent } from './zoo-label-wrap/zoo-label-wrap.component';
import { SkeletonModule } from 'primeng/skeleton';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [ZooLabelWrapComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    TooltipModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ZooLabelWrapComponent],
})
export class ZooLabelWrapModule {}
