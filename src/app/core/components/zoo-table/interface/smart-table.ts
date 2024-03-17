export interface ISmartTable {
  columnsMethod: IColumnmethod[];
  sortMode?: 'multiple' | 'single' | 'custom';
  globalFilterFields?: any[];
  paginatorMethod: IPaginatorMethod;
  scrollMethod?: IScrollMethod;
  ressizeMethod?: IResizeMethod;
  styleClass?: 'Grid';
  eventButtonList?: IEventList[];
  isRowClick?: boolean;
}

export interface IEventList {
  icon: string;
  label: string;
  onClick?: (params?: any) => void;
  status: string;
  name?: string;
}

export interface IResizeMethod {
  isResizableColumns: boolean;
  isReorderableColumns: boolean;
}

export interface IScrollMethod {
  isScrolable: boolean;
  scrollHeight: string;
}

export interface IColumnmethod {
  header: string;
  field: string;
  width: string;
  filterType?: string;
  isFrozen?: boolean;
  isRightFrozen?: boolean;
  isCellClick?: boolean;
  type?: string;
  icon?: string;
  optionsList?: any;
  activeLink?: string;
  disabledLink?: string;
  editable?: boolean;
  typeOptions?: any;
  callback?: (params?: any) => void;
}

export interface IPaginatorMethod {
  isPaginator: boolean;
  first: number;
  rowsCount: number;
  isReport: boolean;
  rowsPerPageOptions: number[];
}
export interface IProductTable {
  columnsMethod: IProductColumnmethod[];
  sortMode?: 'multiple' | 'single' | 'custom';
  globalFilterFields?: any[];
  paginatorMethod: IPaginatorMethod;
  scrollMethod?: IScrollMethod;
  ressizeMethod?: IResizeMethod;
  styleClass?: 'Grid';
  eventButtonList?: IEventList[];
  isRowClick?: boolean;
}

export interface IProductColumnmethod {
  header: string;
  field: string;
  width: string;
  filterType?: string;
  isFrozen?: boolean;
  isRightFrozen?: boolean;
  isCellClick?: boolean;
  type?: string;
  readOnly?: boolean;
  required?: boolean;
  data?: any;
  inputType?: string;
  inputId?: string;
  mode?: string;
  currency?: string;
  prefix?: string;
  maxFractionDigits?: number;
  minFractionDigits?: number;
  list?: any;
  filterFieldName?: string;
  icon?: string;
  isIconOnly?: boolean;
  isText?: boolean;
  link?: string;
  form?: any;
}
