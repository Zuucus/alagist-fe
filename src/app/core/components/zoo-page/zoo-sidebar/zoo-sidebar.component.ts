import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISideMenuMethod } from '../interface/page';
import { PageService } from '../service/page.service';

@Component({
  selector: 'zoo-sidebar',
  templateUrl: './zoo-sidebar.component.html',
  styleUrls: ['./zoo-sidebar.component.scss'],
})
export class ZooSidebarComponent implements OnInit {
  items: ISideMenuMethod[];

  constructor(
    private router: Router,
    private pageService: PageService,
  ) {}

  ngOnInit(): void {
    this.items = this.pageService.getSideMenuListWithoutHiddenPage();
  }

  changeSelection(item: any) {
    this.pageService.changeSelection(item);
    this.items = this.pageService.getSideMenuListWithoutHiddenPage();

    if (item.children.length === 0) {
      this.router.navigate([item.route]);
    }
  }

  changeChildRoute(item: any, child: any) {
    this.pageService.changeSelection(item, child);
    this.items = this.pageService.getSideMenuListWithoutHiddenPage();
    this.router.navigate([child.route]);
  }
}
