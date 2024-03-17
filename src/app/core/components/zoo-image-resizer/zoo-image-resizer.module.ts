import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooImageResizerComponent } from './zoo-image-resizer/zoo-image-resizer.component';
import { ZooImageCropperComponent } from './zoo-image-cropper/zoo-image-cropper.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [ZooImageResizerComponent, ZooImageCropperComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ZooImageResizerComponent, ZooImageCropperComponent],
})
export class ZooImageResizerModule {}
