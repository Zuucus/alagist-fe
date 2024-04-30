import { Injectable } from '@angular/core';
import { Role } from 'src/app/enums/role.enum';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  getRoleList(): string[] {
    return Object.values(Role);
  }

  sideMenuList = [
    {
      name: 'Dashboard',
      icon: 'pi-home',
      children: [],
      route: '/dashboard',
      isSelected: false,
      isHovered: false,
      enum: Role.DASHBOARD,
      roles: this.getRoleList(),
    },
    {
      name: 'Appointments',
      icon: 'pi-calendar',
      route: '/appointments',
      isSelected: false,
      isHovered: false,
      enum: Role.APPOINTMENT,
      roles: [Role.APPOINTMENT],
      hidden: false,
      children: [
        {
          name: 'Appointments List',
          icon: 'pi-file',
          children: [],
          route: '/appointments',
          isSelected: false,
          isHovered: false,
          enum: Role.MYDOCUMENTS,
          roles: [Role.MYDOCUMENTS, Role.SuperUser],
          hidden: false,
        },
        {
          name: 'Calendar',
          icon: 'pi-calendar',
          children: [],
          route: '/appointments/calendar',
          isSelected: false,
          isHovered: false,
          enum: Role.DOCUMENTAPPROVAL,
          roles: [Role.DOCUMENTAPPROVAL, Role.SuperUser],
          hidden: false,
        }
      ],
    },
    {
      name: 'Services',
      icon: 'pi-cog',
      route: '/services',
      isSelected: false,
      isHovered: false,
      enum: Role.SERVICES,
      roles: [Role.SERVICES],
      hidden: false,
      children:[]
    },
    {
      name: 'Employee',
      icon: 'pi-user',
      route: '/employee',
      isSelected: false,
      isHovered: false,
      enum: Role.EMPLOYEE,
      roles: [Role.EMPLOYEE],
      hidden: false,
      children: [],
    },
    {
      name: 'Portfolio',
      icon: 'pi-briefcase',
      route: '/portfolio',
      isSelected: false,
      isHovered: false,
      enum: Role.PORTFOLIO,
      roles: [Role.PORTFOLIO],
      hidden: false,
      children: [],
    },
    {
      name: 'Customers',
      icon: 'pi-users',
      route: '/customers',
      isSelected: false,
      isHovered: false,
      enum: Role.CUSTOMER,
      roles: [Role.CUSTOMER],
      hidden: false,
      children: [],
    },
  ];

  languageList = [
    {
      name: 'English',
      code: 'en',
      isSelected: true,
    },
    {
      name: '日本',
      code: 'ja',
      isSelected: false,
    },
  ];

  getLanguageList() {
    return this.languageList;
  }

  getSideMenuPageList() {
    return this.sideMenuList;
  }

  getSideMenuListWithoutHiddenPage() {
    const sideMenuList = JSON.parse(JSON.stringify(this.sideMenuList));
    return this.filterItems(sideMenuList);
  }

  changeSelection(item: any, children?: any) {
    this.sideMenuList = this.sideMenuList.map((x) => {
      if (
        item.route === x.route &&
        item.name === x.name &&
        item.icon === x.icon
      ) {
        x.isSelected = children ? true : !x.isSelected;
      } else {
        x.isSelected = false;
      }

      if (children) {
        x.children = x.children.map((c: any) => {
          c.isSelected =
            children && children.route === c.route && children.name === c.name;
          return c;
        });
      }
      return x;
    });
  }

  private filterItems(items: any[]) {
    return items.filter((item) => {
      if (item.hidden) {
        return false;
      } else {
        if (item.children && item.children.length > 0) {
          item.children = this.filterItems(item.children);
        }
        return true;
      }
    });
  }
}
