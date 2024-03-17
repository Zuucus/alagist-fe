import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooLabelComponent } from './components/zoo-label/zoo-label.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [ZooLabelComponent],
  imports: [
    CommonModule,
    TooltipModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ZooLabelComponent],
  providers: [
  ],
})
export class ZooLabelModule {}
