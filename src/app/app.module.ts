import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ZooButtonModule } from './core/components/zoo-button/zoo-button.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ToolbarModule } from 'primeng/toolbar';
import { ZooLabelModule } from './core/components/zoo-label/zoo-label.module';
import { ZooPageNotFoundModule } from './core/components/zoo-page-not-found/zoo-page-not-found.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/il8n//', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ToastModule,
    BrowserAnimationsModule,
    ZooButtonModule,
    MessagesModule,
    ToolbarModule,
    ZooLabelModule,
    HttpClientModule,
    ZooPageNotFoundModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    MessageService,
    ConfirmationService,
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
