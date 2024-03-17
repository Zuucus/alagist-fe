import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooAutocompleteComponent } from './zoo-autocomplete/zoo-autocomplete.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

@NgModule({
  declarations: [ZooAutocompleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    AutoCompleteModule,
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
  exports: [ZooAutocompleteComponent],
})
export class ZooAutocompleteModule {}
