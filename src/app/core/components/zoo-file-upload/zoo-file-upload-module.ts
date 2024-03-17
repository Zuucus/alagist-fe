import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooFileUploadComponent } from './zoo-file-upload/zoo-file-upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';



@NgModule({
    declarations: [
        ZooFileUploadComponent
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
        ZooFileUploadComponent
    ]
})
export class ZooFileUploadModule { }
