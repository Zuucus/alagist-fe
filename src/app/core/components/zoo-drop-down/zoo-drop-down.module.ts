import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooDropDownComponent } from './zoo-drop-down/zoo-drop-down.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { SkeletonModule } from 'primeng/skeleton';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

@NgModule({
  declarations: [ZooDropDownComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    MultiSelectModule,
    SkeletonModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ZooDropDownComponent],
})
export class ZooDropDownModule {}
