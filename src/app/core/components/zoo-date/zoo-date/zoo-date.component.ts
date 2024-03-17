import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'zoo-date',
  templateUrl: './zoo-date.component.html',
  styleUrls: ['./zoo-date.component.scss'],
})
export class ZooDateComponent implements OnInit {
  @Input() label = '';

  @Input() labelClass = 'text-sm';

  @Input() required = false;

  @Input() showIcon = true;

  @Input() data = '';

  @Input() placeholder = 'Date';

  @Input() skeletonHeight = '2rem';

  @Input() loading = false;

  @Input() labelTooltip = '';
  @Input() tooltipPosition = 'right';
  @Input() showDelay = '100';
  @Input() iconClass = 'pi-info-circle';
  @Input() dateFormat = 'yy/mm/dd';
  @Input() disabled = false;

  @Input() inputId = 'icon'; //time ,timeOnly
  @Input() view = 'date';
  @Input() timeOnly = false;
  @Input() hourFormat = '24';

  @Input() selectionMode = 'single'; // range or multiple

  @Input() minDate = '';
  @Input() maxDate = '';
  @Input() disabledDays = [];
  @Input() disabledDates = [];

  @Input() control: FormControl;
  @Input() formGroup: FormGroup; // Form Group
  @Input() formControlKey: string; // unique key used to identify control
  @Input() errorMessage: string;
  @Input() showClear = true;
  @Input() showOtherMonths = false;

  @Output() dataChange = new EventEmitter<any>();

  @Output() onSelectChange = new EventEmitter<any>();
  @Output() onClear = new EventEmitter<any>();
  @Output() onYearChange = new EventEmitter<any>();
  @Output() onMonthChange = new EventEmitter<any>();
  @Output() onBlur = new EventEmitter<any>();

  private ValidatorsArray: any[] = [];

  private valueChangesSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.ValidatorsArray = [];
    if (this.required) {
      this.ValidatorsArray.push(Validators.required);
    }
    if (this.control) {
      this.control.setValidators(this.ValidatorsArray);
    } else {
      this.control = new FormControl('', this.ValidatorsArray);
    }
    this.formGroup?.addControl(this.formControlKey.toString(), this.control);
    this.errorMessage = this.errorMessage
      ? this.errorMessage
      : this.getErrorMessage();

    if (this.formControlKey && this.formGroup) {
      this.valueChangesSubscription = this.formGroup?.valueChanges
        .pipe(distinctUntilChanged())
        .subscribe((value) => {
          if (this.data !== value[this.formControlKey]) {
            this.data = value[this.formControlKey];
          }
        });
    }
  }

  getErrorMessage() {
    return this.control.hasError('required')
      ? this.label
        ? this.label + ' ' + 'is required'
        : 'required'
      : '';
  }

  onModelChange(value: any) {
    this.data = value;
    if (this.formControlKey && this.formGroup) {
      const key = this.formControlKey.toString();
      if (this.formGroup?.get(key)?.value !== value) {
        this.formGroup?.get(key)?.setValue(value);
      }
    }
    this.dataChange.emit(this.data);
  }

  selectDate(value: any) {
    this.onSelectChange.emit(value);
    if (
      this.selectionMode === 'range' &&
      value &&
      this.data.length === 2 &&
      this.data[1]
    ) {
      const calendarInput = document.getElementById(this.inputId); // Get the calendar input field by ID
      if (calendarInput) {
        calendarInput.blur(); // Blur the input to close the calendar panel
      }
    } else if (this.selectionMode !== 'range' && value && value.length === 1) {
      const calendarInput = document.getElementById(this.inputId); // Get the calendar input field by ID
      if (calendarInput) {
        calendarInput.blur(); // Blur the input to close the calendar panel
      }
    }
  }

  onClearInput() {
    this.onClear.emit();
  }

  yearChange(event: any) {
    this.onYearChange.emit(event);
  }

  monthChange(event: any) {
    this.onMonthChange.emit(event);
  }

  blur(event: any) {
    this.onBlur.emit(event);
  }
}
