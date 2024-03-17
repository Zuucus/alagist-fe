import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooInputBoxComponent } from './input-box/input-box.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';



@NgModule({
  declarations: [
    ZooInputBoxComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ButtonModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ],
  exports: [
    ZooInputBoxComponent
  ]
})
export class ZooInputBoxModule { }
