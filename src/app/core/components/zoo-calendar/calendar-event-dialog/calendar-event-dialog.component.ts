import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'calendar-event-dialog',
  templateUrl: './calendar-event-dialog.component.html',
  styleUrls: ['./calendar-event-dialog.component.scss'],
})
export class CalendarEventDialogComponent implements OnInit {
  progressBar = false;

  public formGroup: FormGroup = new FormGroup([]);

  editMode = false;

  event = {
    title: '',
    start: '',
    end: '',
  };

  constructor(
    public dynamicDialogRef: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    if (this.config.data.event) {
      this.event = this.config.data.event;
      this.editMode = true;
    }
  }

  OnCancel() {
    this.dynamicDialogRef.close();
  }

  OnSave() {
    this.dynamicDialogRef.close(this.event);
  }

  OnDelete() {
    this.dynamicDialogRef.close('delete');
  }
}
