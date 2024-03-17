import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooSelectComponent } from './zoo-select/zoo-select.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [ZooSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    SkeletonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ZooSelectComponent],
})
export class ZooSelectModule {}
