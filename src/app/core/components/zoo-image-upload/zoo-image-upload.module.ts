import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooImageUploadComponent } from './zoo-image-upload/zoo-image-upload.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';



@NgModule({
  declarations: [
    ZooImageUploadComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ],
  exports: [
    ZooImageUploadComponent
  ]
})
export class ZooImageUploadModule { }
