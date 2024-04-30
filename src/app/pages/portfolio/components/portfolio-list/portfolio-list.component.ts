import { TitleCasePipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ISmartTable } from 'src/app/core/components/zoo-table/interface/smart-table';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';
import { PorfolioService } from '../../services/porfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent {
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
  portfolioList: any = [];
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
    private porfolioService: PorfolioService,
    private zooMessageService: ZooMessageService,
    private router: Router,
    private titleCasePipe: TitleCasePipe,
    private datePipe: DatePipe,
    public dynamicDialogRef: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    this.createSmartTable();
    this.getPortFolioList();
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
          field: 'image',
          header: 'Image',
          width: '10%',
          isFrozen: true,
          isCellClick: true,
        },
        {
          field: 'service_name',
          header: 'Service Name',
          width: '10%',
          filterType: 'text',
        },
        {
          field: 'description',
          header: 'Description',
          width: '10%',
          filterType: 'text',
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
    this.getPortFolioList();
  }

  updatePageRecords(val: any) {
    this.filterValues.page = val.currentPage;
    this.filterValues.perPage = val.rows;
    this.getPortFolioList();
  }

  getPortFolioList() {
    this.loading = true;
    this.porfolioService
      .getPortFolioList(this.filterValues)
      .subscribe({
        next: (res: any) => {
          this.loading = false;
          this.portfolioList = res.data;
          this.total = res.total;
        },
        error: (error:any) => {
          this.loading = false;
          this.zooMessageService.sendError(error.error[Object.keys(error.error)[0]]);
        },
      });

  }

  newRecord() {
    this.router.navigate([`portfolio/new`]);
  }

  onCellClick(val: any) {
 if (val.field === 'id') {
      this.router.navigate([`portfolio/${val.value}/view`]);
    }
  }

  OnNewClicked() {
    this.router.navigate([`portfolio/new`]);
  }
}

