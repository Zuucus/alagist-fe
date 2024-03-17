export interface Page { }

export interface IBreadCrumbMethod {
  label: string;
  route: string;
}

export interface ISideMenuMethod {
  name: string;
  icon: string;
  children?: any;
  route: string;
  isSelected: boolean;
  isHovered: boolean;
  hidden?: boolean;
}
