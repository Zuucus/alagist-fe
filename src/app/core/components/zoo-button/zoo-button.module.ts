import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooButtonComponent } from './zoo-button/zoo-button.component';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [ZooButtonComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ZooButtonComponent],
})
export class ZooButtonModule {}
