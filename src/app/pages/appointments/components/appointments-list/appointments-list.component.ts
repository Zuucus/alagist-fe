import { TitleCasePipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ISmartTable } from 'src/app/core/components/zoo-table/interface/smart-table';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';
import { AppointmentsService } from '../../services/appointments.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent {
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
  appointmentList: any = [];
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
    private appointmentsService: AppointmentsService,
    private zooMessageService: ZooMessageService,
    private router: Router,
    private titleCasePipe: TitleCasePipe,
    private datePipe: DatePipe,
    public dynamicDialogRef: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    this.createSmartTable();
    this.geAppointmentList();
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
          field: 'name',
          header: 'Account Name',
          width: '10%',
          filterType: 'text',
          isFrozen: true,
          isCellClick: true,
        },
        {
          field: 'from_time',
          header: 'From Date',
          width: '13%',
          filterType: 'date',
        },
        {
          field: 'to_date',
          header: 'To Date',
          width: '13%',
          filterType: 'date',
        },
        {
          field: 'scheduled_date',
          header: 'Scheduled Date',
          width: '13%',
          filterType: 'date',
        },
        {
          field: 'payment_date',
          header: 'Payment Date',
          width: '13%',
          filterType: 'date',
        },
        {
          field: 'status',
          header: 'Status',
          width: '12%',
          filterType: 'drop',
          optionsList: [
            { label: 'Pending', value: 'pending', class: 'status-orange' },
            { label: 'Queued', value: 'queued', class: 'status-red' },
            {
              label: 'Generating',
              value: 'generating',
              class: 'status-light-blue',
            },
            { label: 'Generated', value: 'generated', class: 'status-green' },
            { label: 'Sent', value: 'sent', class: 'status-blue' },
          ],
        },
        {
          field: 'statement_url',
          header: 'Statement',
          width: '10%',
          filterType: '',
          type: 'icon',
          icon: 'pi-file-pdf',
          isCellClick: true,
        },
        {
          field: 'author',
          header: 'Author',
          width: '10%',
          filterType: '',
        },
        {
          field: 'created_at',
          header: 'Created At',
          width: '10%',
          filterType: '',
        },
        {
          field: 'updated_at',
          header: 'Updated At',
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
    if (params.status === 'Pending') {
      this.router.navigate([`accounts/customer-statements/edit/${params.id}`]);
    } else {
      this.zooMessageService.sendMessage({
        to: 'toast',
        message: {
          key: 'toast',
          severity: 'error',
          summary: 'Error',
          detail: 'You can edit only the pending statements',
        },
      });
    }
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
    this.geAppointmentList();
  }

  updatePageRecords(val: any) {
    this.filterValues.page = val.currentPage;
    this.filterValues.perPage = val.rows;
    this.geAppointmentList();
  }

  geAppointmentList() {
    //this.loading = true;

  }

  newRecord() {
    this.router.navigate([`appointments/new`]);
  }

  onCellClick(val: any) {
 if (val.field === 'id') {
      this.router.navigate([`appointments/${val.value}/view`]);
    }
  }

  OnNewClicked() {
    this.router.navigate([`appointments/new`]);
  }
}
