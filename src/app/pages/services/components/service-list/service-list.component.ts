import { TitleCasePipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ISmartTable } from 'src/app/core/components/zoo-table/interface/smart-table';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent {
  breadCrumbItems = [
    { label: 'Home', route: '' },
    { label: 'Statements', route: 'accounts/customer-statements' },
  ];
  progressBar = false;
  selectedAccount: any = {};
  public formGroup: FormGroup = new FormGroup([]);
  fromDate: any;
  toDate: any;
  title = 'Statements';

  smartTable!: ISmartTable;
  serviceList: any = [];
  loading = false;
  total = 0;
  products: any = [];

  filterValues: any = {
    name: '',
    page: 1,
    perPage: 15,
    status: '',
    from_time: '',
    to_date: '',
    scheduled_date: '',
    payment_date: '',
  };

  constructor(
    private servicesService: ServicesService,
    private zooMessageService: ZooMessageService,
    private router: Router,
    private titleCasePipe: TitleCasePipe,
    private datePipe: DatePipe,
    public dynamicDialogRef: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    this.createSmartTable();
    this.getServiceList();
  }

  createSmartTable() {
    this.smartTable = {
      columnsMethod: [
        {
          field: 'id',
          header: 'Id',
          width: '10%',
          isFrozen: true,
          isCellClick: true,
        },
        {
          field: 'service_name',
          header: 'Service Name',
          width: '10%',
          filterType: 'text',
          isFrozen: true,
          isCellClick: true,
        },
        {
          field: 'service_category',
          header: 'Service Category',
          width: '10%',
          filterType: 'text',
        },
        {
          field: 'time_estimation',
          header: 'Time Estimation',
          width: '10%',
          filterType: 'text',
        },
        {
          field: 'discount',
          header: 'Discount',
          width: '10%',
          filterType: 'date',
        },
        {
          field: 'price',
          header: 'Price',
          width: '10%',
          filterType: 'text',
        },
        {
          field: 'status',
          header: 'Status',
          width: '10%',
          filterType: 'drop',
          optionsList: [
            { label: 'Active', value: 'active', class: 'status-green' },
            { label: 'InActive', value: 'in_active', class: 'status-red' },
          ],
        },
        {
          field: 'author',
          header: 'Author',
          width: '10%',
          filterType: '',
        },
        {
          field: '',
          type: 'button',
          header: '',
          width: '10%',
          filterType: '',
          isRightFrozen: true,
        },
      ],
      eventButtonList: [
        {
          icon: 'pi-pencil',
          label: 'Edit',
          status: 'primary',
          onClick: (params: any) => this.onRowEdit(params),
        },
        {
          icon: 'pi-trash',
          label: 'Delete',
          status: 'danger',
          onClick: (params: any) => this.onRowDelete(params),
        },
      ],

      paginatorMethod: {
        isPaginator: true,
        first: 0,
        rowsCount: 15,
        isReport: true,
        rowsPerPageOptions: [15, 25, 50],
      },
    };
  }

  onRowEdit(params: any) {

  }

  onRowDelete(params: any) {
    this.zooMessageService.sendMessage({
      to: 'confirmDialog',
      message: {
        key: 'confirmDialog',
        header: 'Confirm Delete',
        message: 'Are you sure that you want to Delete?',
        accept: () => {
          this.progressBar = true;

        },
        reject: () => {
          this.dynamicDialogRef.close();
        },
      },
    });
  }

  updateFilterRecords(val: any) {
    this.filterValues.page = 1;
    this.filterValues.name = val.filters.name.value;
    this.filterValues.status = val.filters.status.value;
    this.filterValues.from_time = val.filters.from_time.value
      ? this.datePipe.transform(val.filters.from_time.value, 'yyyy-MM-dd')
      : '';
    this.filterValues.to_date = val.filters.to_date.value
      ? this.datePipe.transform(val.filters.to_date.value, 'yyyy-MM-dd')
      : '';
    this.filterValues.scheduled_date = val.filters.scheduled_date.value
      ? this.datePipe.transform(val.filters.scheduled_date.value, 'yyyy-MM-dd')
      : '';
    this.filterValues.payment_date = val.filters.payment_date.value
      ? this.datePipe.transform(val.filters.payment_date.value, 'yyyy-MM-dd')
      : '';
    this.getServiceList();
  }

  updatePageRecords(val: any) {
    this.filterValues.page = val.currentPage;
    this.filterValues.perPage = val.rows;
    this.getServiceList();
  }

  getServiceList() {
    this.loading = true;
    this.servicesService
      .getServicesList(this.filterValues)
      .subscribe({
        next: (res: any) => {
          this.loading = false;
          this.serviceList = res.data;
          this.total = res.total;
        },
        error: (error:any) => {
          this.loading = false;
          this.zooMessageService.sendError(error.error[Object.keys(error.error)[0]]);
        },
      });

  }

  newRecord() {
    this.router.navigate([`services/new`]);
  }

  onCellClick(val: any) {
 if (val.field === 'id') {
      this.router.navigate([`services/${val.value}/view`]);
    }
  }

  OnNewClicked() {
    this.router.navigate([`services/new`]);
  }
}
