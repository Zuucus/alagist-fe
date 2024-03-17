import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Table } from 'primeng/table';
import { ISmartTable } from '../interface/smart-table';

@Component({
  selector: 'zoo-table',
  templateUrl: './zoo-table.component.html',
  styleUrls: ['./zoo-table.component.scss'],
})
export class ZooTableComponent implements OnInit {
  @ViewChild('dt') table!: Table;
  @ViewChild('op') ovelay: OverlayPanel;
  @Input() leftToolsTemplateRef: TemplateRef<any>;
  @Input() rightToolsTemplateRef: TemplateRef<any>;
  @Input() smartTable!: ISmartTable;
  @Input() value: any = [];
  @Input() loading = false;
  @Input() total = 0;
  @Input() selectionMode = 'single';
  @Input() selection = [];
  @Input() styleClass = 'p-datatable-striped p-datatable-sm';
  @Input() isTableHeader = true;
  @Input() isTableFilter = true;

  @Output() onLazyLoadChange = new EventEmitter<any>();
  @Output() onPageChange = new EventEmitter<any>();
  @Output() onFilterChange = new EventEmitter<any>();
  @Output() onRowClick = new EventEmitter<any>();
  @Output() onCellClick = new EventEmitter<any>();
  @Output() onCellEditChange = new EventEmitter<any>();
  @Output() onSelect = new EventEmitter<any>();

  loadingArray: any[15] = 0;

  public optionData: any;

  seletedRows: any[] = [];

  selectedProduct: any;

  items: any;

  constructor() {}

  ngOnInit() {
    // this.items = [
    //   {
    //     label: 'Open in New Tab',
    //     icon: 'pi pi-external-link',
    //     command: () =>
    //       this.cellClick(this.selectedProduct, this.selectedProduct.id, this.selectedProduct),
    //   },
    // ];
  }

  openNewTab() {
    console.log(this.selectedProduct);
  }

  next() {
    this.smartTable.paginatorMethod.first =
      this.smartTable.paginatorMethod.first +
      this.smartTable.paginatorMethod.rowsCount;
  }

  prev() {
    this.smartTable.paginatorMethod.first =
      this.smartTable.paginatorMethod.first -
      this.smartTable.paginatorMethod.rowsCount;
  }

  reset() {
    this.smartTable.paginatorMethod.first = 0;
  }

  isLastPage(): boolean {
    return this.value
      ? this.smartTable.paginatorMethod.first ===
          this.value.length - this.smartTable.paginatorMethod.rowsCount
      : true;
  }

  isfirstPage(): boolean {
    return this.value ? this.smartTable.paginatorMethod.first === 0 : true;
  }

  optionClicked(event: any, data: any) {
    this.optionData = data;
    this.ovelay.toggle(event);
  }

  onLazyLoad(event: LazyLoadEvent) {
    this.onLazyLoadChange.emit(event);
  }

  onPageLoad(event: any) {
    this.value = this.value.map((x: any) => {
      // remove string 'row-appended' from property styleClass
      if (x.styleClass) {
        x.styleClass = x.styleClass.replace('row-appended', '');
      }
      return x;
    });
    let data: any = {};
    data.first = event.first;
    data.rows = event.rows;
    data.currentPage = event.first / event.rows + 1;
    this.onPageChange.emit(data);
  }

  filterChange(event: any) {
    this.onFilterChange.emit(event);
  }

  onRowSelect(event: any) {
    if (this.selection) {
      this.selection = this.selection.filter((x: any) => x);
      this.onSelect.emit(this.selection);
    }
  }

  rowClick(rowData: any) {
    this.onRowClick.emit(rowData);
  }

  cellClick(field: any, cellData: any, rowData: any, isNewTab?: boolean) {
    let data: any = {};
    data.field = field;
    data.value = cellData;
    data.rowData = rowData;
    this.onCellClick.emit(data);
  }

  cellEditChange(event: any) {
    this.onCellEditChange.emit(event);
  }

  getClassNames(field: any, col: any) {
    if (
      col &&
      (col.type === 'text' || !col.type) &&
      col.optionsList &&
      col.optionsList.length > 0 &&
      col.optionsList.some((x: any) => x.label === field || x.value === field)
    ) {
      const option = col.optionsList.find(
        (x: any) => x.label === field || x.value === field
      );
      return option.class ? [option.class] : [];
    }

    const classNames = [];
    if (col && col.isCellClick) {
      classNames.push('cursor-pointer');
    }
    if (field === 'Pending' || field === 'Draft') {
      classNames.push('status-orange');
    } else if (
      field === 'InStock' ||
      field === 'Finalized' ||
      field === 'Sent' ||
      field === 'Returned' ||
      field === 'Approved'
    ) {
      classNames.push('status-blue');
    } else if (
      field === 'Invoiced' ||
      field === 'Inactive' ||
      field === 'Queued'
    ) {
      classNames.push('status-red');
    } else if (
      field === 'Shipped' ||
      field === 'Exported' ||
      field === 'Active' ||
      field === 'Generated'
    ) {
      classNames.push('status-green');
    } else if (col.header === 'Type' && field === 'Payment Received') {
      classNames.push('status-light-blue');
    }
    return classNames;
  }

  getProperty(obj: any, path: string): any {
    return path.split('.').reduce((o, p) => (o ? o[p] : null), obj);
  }

  onSelectAll(event: any) {
    this.onSelect.emit(this.selection);
  }

  onRowUnselect($event: any) {
    this.onSelect.emit(this.selection);
  }

  isButtonDisabled(rowData: any, option: any) {
    if (
      rowData &&
      rowData.disabled_button_list &&
      option &&
      option.name &&
      rowData.disabled_button_list.includes(option.name)
    ) {
      return true;
    }
    {
      return false;
    }
  }

  isCellEditable(rowData: any, col: any) {
    return col.editable && !rowData.is_not_editable;
  }

  getTooltip(rowData: any, col: any) {
    if (col.optionsList && col.optionsList.length > 0) {
      const option = col.optionsList.find(
        (x: any) => x.value === rowData[col.field]
      );

      if (!option) {
        return rowData[col.field];
      }

      if (option.tooltip) {
        return option.tooltip;
      }

      if (option.label) {
        return option.label;
      }
    }
    return rowData[col.field];
  }

  isContainsInOptionsList(val: any, options: any[]) {
    return options.some((x: any) => x.value === val);
  }

  getRange(rowsPerPageOptions: any): number[] {
    let rows = rowsPerPageOptions.length > 0 ? rowsPerPageOptions[0] : 0;
    if (rows >= 15) {
      return [1, 2, 3];
    } else if (rows == 10) {
      return [1, 2];
    } else if (rows == 5) {
      return [1];
    } else {
      return [1]; // Default case, empty array if none of the conditions match
    }
  }
}
