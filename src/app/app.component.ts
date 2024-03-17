import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';
import { Subscription } from 'rxjs';
import { ISideMenuMethod } from './core/components/zoo-page/interface/page';
import { PageService } from './core/components/zoo-page/service/page.service';
import { ZooMessageService } from './core/services/zoo-message.service';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alagist-web';
  subscription: Subscription;
  url = '';
  items: ISideMenuMethod[];
  favIcon: HTMLLinkElement | null;
  confirmContent: any;

  constructor(
    private zooMessageService: ZooMessageService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private pageService: PageService,
   // public translate: TranslateService,
    public primeNGConfig: PrimeNGConfig,
    private titleService: Title,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url;
        this.changeSelected();
      }

      // translate.addLangs(['en', 'ja']);
      // const browserLang: any = translate.getBrowserLang();
      // let lang = browserLang.match(/en|ja/) ? browserLang : 'en';
      //this.pusher = this.echoService.getPusher();
      //translate.setDefaultLang(lang);
    });



    // this.subscription = this.zooMessageService
    //   .onMessage()
    //   .subscribe((message) => {
    //     if (message.to === 'toast') {
    //       this.messageService.add(message.message);
    //     } else if (message.to === 'confirmDialog') {
    //       message.message.header = message.message.header
    //         ? this.translate.instant(message.message?.header)
    //         : '';
    //       message.message.message = message.message.message
    //         ? this.translate.instant(message.message?.message)
    //         : '';
    //       message.message.acceptLabel = message.message.acceptLabel
    //         ? this.translate.instant(message.message?.acceptLabel)
    //         : '';
    //       message.message.rejectLabel = message.message.rejectLabel
    //         ? this.translate.instant(message.message?.rejectLabel)
    //         : '';
    //       this.confirmationService.confirm(message.message);
    //     } else if (message.to === 'language') {
    //       this.changeLang(message.message);
    //     } else if (message.to === 'confirmPopup') {
    //       this.confirmationService.confirm(message.message);
    //     }
    //   });
    this.createOnline$().subscribe((isOnline) => {
      if (isOnline) {
        this.favIcon ? (this.favIcon.href = 'assets/images/keshav.png') : '';
        this.changeSelected();
      } else {
        this.favIcon ? (this.favIcon.href = 'assets/images/no-net.png') : '';
        this.setDocTitle('No Internet');
      }
    });
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

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

  changeLang(lang: any) {
    //this.translate.use(lang);
    // this.languageService.getTranslations(lang).subscribe({
    //   next: (translations: any) => {
    //     this.translate.setTranslation(lang, translations);
    //     this.translate.use(lang);
    //   },
    //   error: (error: any) => {},
    // });
  }

  changeSelected() {
    if (this.url !== '/') {
      let parentUrl = this.url.split('/');
      this.items = this.pageService.getSideMenuPageList();
      let item = this.items.find(
        (item: any) => item.route == '/' + parentUrl[1]
      );
      if (item) {
        this.items.forEach((x: any) => (x.isSelected = false));
        this.setDocTitle(item.name);
        item.isSelected = true;
        let child = item.children.find(
          (child: any) => child.route == '/' + parentUrl[1] + '/' + parentUrl[2]
        );
        if (child) {
          item.children.forEach((x: any) => (x.isSelected = false));
          child.isSelected = true;
          this.setDocTitle(item.name + '-' + child.name);
        }
      }
    } else {
      this.pageService.sideMenuList[0].isSelected = true;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    localStorage.removeItem('logo_url');
    localStorage.removeItem('name');
    localStorage.clear();
  }

  public ngOnInit() {
    this.primeNGConfig.ripple = true;
    this.favIcon = document.querySelector('#appIcon');
    localStorage.removeItem('logo_url');
    localStorage.removeItem('name');
    this.getmyInfo();
  }

  getmyInfo() {
    // this.userService.getMyInfo().subscribe({
    //   next: (result: any) => {
    //     this.userService.userInfoSubject.next(result);
    //     localStorage.setItem('logo_url', result.location?.logo_url);
    //     localStorage.setItem('name', result.location?.name);

    //     const channelName = `user-push-notification.${result.id}`;
    //     const channel = this.pusher.subscribe(channelName);
    //     // broadcastAs 'UserPushNotificationEvent'
    //     channel.bind('UserPushNotificationEvent', (data: any) => {
    //       const option = { user: result };
    //       this.notificationService.handle(data, option);
    //     });
    //   },
    //   error: (error:any) => {
    //     this.zooMessageService.sendMessage({
    //       to: 'toast',
    //       message: {
    //         key: 'toast',
    //         severity: 'error',
    //         summary: 'Error',
    //         detail: error.error[Object.keys(error.error)[0]],
    //       },
    //     });
    //   },
    // });
  }

  getIconClass(message: any) {
    if (message.severity?.toLowerCase() === 'success') {
      return 'pi pi-check-circle';
    } else if (message.severity?.toLowerCase() === 'info') {
      return 'pi pi-info-circle';
    } else if (message.severity?.toLowerCase() === 'error') {
      return 'pi pi-times-circle';
    } else {
      return 'pi pi-exclamation-triangle';
    }
  }

  navigateTo(route: string) {
    this.router.navigate(['/login']);
  }
}
