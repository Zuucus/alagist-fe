import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooRadioComponent } from './zoo-radio/zoo-radio.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [ZooRadioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    SkeletonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ZooRadioComponent],
})
export class ZooRadioModule {}
