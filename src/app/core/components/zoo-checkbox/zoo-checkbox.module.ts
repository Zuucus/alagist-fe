import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooCheckboxComponent } from './zoo-checkbox/zoo-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [ZooCheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    ReactiveFormsModule,
    SkeletonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ZooCheckboxComponent],
})
export class ZooCheckboxModule {}
