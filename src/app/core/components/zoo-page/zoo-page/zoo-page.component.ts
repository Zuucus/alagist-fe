import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  HostListener,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';
import { IBreadCrumbMethod, ISideMenuMethod } from '../interface/page';
import { PageService } from '../service/page.service';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from 'src/app/enums/role.enum';

@Component({
  selector: 'zoo-page',
  templateUrl: './zoo-page.component.html',
  styleUrls: ['./zoo-page.component.scss'],
})
export class ZooPageComponent implements OnInit, OnDestroy {
  @ViewChild('op') ovelay: OverlayPanel;
  @ViewChild('lang') ovelayLang: OverlayPanel;
  @Input() breadCrumbItems: IBreadCrumbMethod[] = [];
  @Input() progressBar = false;
  @Input() isSidebar = true;
  @Input() isToolbar = true;
  @Input() showArchive = false;

  userName: any = '';
  language = '';
  languageList: any = [];
  isOnline = true;
  logoUrl = '';
  organizationName = '';
  myInfo: any;
  items!: ISideMenuMethod[];

  tempItems: any = [];
  isShowTempItems = false;

  organizationUsers: any = [];
  selectedUser: any = null;
  displaySendUserDialog = false;

  get myDocumentPermission() {
    if (!this.myInfo) {
      return false;
    }
    return this.myInfo?.roles?.includes(Role.MYDOCUMENTS);
  }


  constructor(
    private router: Router,
    private pageService: PageService,
    private zooMessageService: ZooMessageService,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.createOnline$().subscribe((isOnline) => {
      isOnline ? (this.isOnline = true) : (this.isOnline = false);
    });
  }

  ngOnDestroy(): void {}

  createOnline$() {
    return merge<any>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      })
    );
  }

  ngOnInit(): void {
    this.languageList = this.pageService.getLanguageList();
    this.language = this.languageList.find((lang: any) => lang.isSelected).name;
    if (this.breadCrumbItems) {
      this.breadCrumbItems.forEach((item: any) => {
        item.label = this.translate.instant(item.label);
      });
    }
  }

  breadCrumbClick(val: any) {
    this.router.navigate([val.item.route]);
  }

  logout() {

  }

  openPanel(event: any) {
    this.ovelay.toggle(event);
  }

  openLanguagePanel(event: any) {
    this.ovelayLang.toggle(event);
  }

  changeLang(lang: any) {
    this.language = lang.name;
    this.languageList.forEach((lang: any) => (lang.isSelected = false));
    lang.isSelected = true;
    this.zooMessageService.sendMessage({
      to: 'language',
      message: lang.code,
    });

    this.ovelayLang.hide();
  }

  toMyDocuments() {
    this.router.navigate(['/me/documents']);
  }

  toUserSettings() {
    this.router.navigate(['/me/settings']);
  }
  toVersion() {
    this.router.navigate(['/me/version']);
  }

  get currentUrlWithoutQueryString() {
    return this.router.url;
  }

  // get isThePageSupportTempItems() {
  //   const tempItemsSupportUrls = [
  //     '/memo-in/list',
  //     '/stock/list',
  //     '/sales/local-sales/new',
  //     '/sales/local-sales/list',
  //     '/sales/export-sales/new',
  //   ];
  //   console.log(this.currentUrlWithoutQueryString);
  //   return tempItemsSupportUrls.includes(this.currentUrlWithoutQueryString);
  // }



  get restrictedDisplayButton() {
    const restrictedUrls = ['sales/local-sales/new'];
    return restrictedUrls.includes(this.router.url);
  }

  showTempItemsToggle() {
    this.isShowTempItems = !this.isShowTempItems;
    // set to local storage as string
    localStorage.setItem(
      'isShowTempItems',
      JSON.stringify(this.isShowTempItems)
    );
  }




  closeSendUserDialog() {
    this.displaySendUserDialog = false;
  }
  toMyPage() {
    this.router.navigate(['/me/my-page']);
  }
}
