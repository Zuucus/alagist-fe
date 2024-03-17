import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZooPageComponent } from './zoo-page/zoo-page.component';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ZooButtonModule } from '../zoo-button/zoo-button.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ZooSidebarComponent } from './zoo-sidebar/zoo-sidebar.component';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { ZooAutocompleteModule } from '../zoo-autocomplete/zoo-autocomplete.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { BadgeModule } from 'primeng/badge';
import { ZooDialogModule } from '../zoo-dialog/zoo-dialog.module';
import { ZooLabelModule } from '../zoo-label/zoo-label.module';
import { ZooDropDownModule } from '../zoo-drop-down/zoo-drop-down.module';

@NgModule({
  declarations: [ZooPageComponent, ZooSidebarComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    CardModule,
    AvatarModule,
    SidebarModule,
    ZooButtonModule,
    BreadcrumbModule,
    ToastModule,
    ProgressBarModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    DirectivesModule,
    ZooAutocompleteModule,
    BadgeModule,
    ZooDialogModule,
    ZooLabelModule,
    ZooDropDownModule,
    ZooLabelModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [ZooPageComponent],
})
export class ZooPageModule { }
