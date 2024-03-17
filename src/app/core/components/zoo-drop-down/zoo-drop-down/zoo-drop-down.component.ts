import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'zoo-drop-down',
  templateUrl: './zoo-drop-down.component.html',
  styleUrls: ['./zoo-drop-down.component.scss'],
})
export class ZooDropDownComponent implements OnInit, OnDestroy {
  @Input() label = '';
  @Input() labelClass = 'text-sm';
  @Input() placeholder = 'Enter Text';
  @Input() data = '';
  @Input() disabled = false;
  @Input() required = false;
  @Input() optionsList: any = [];
  @Input() optionLabel = '';
  @Input() showClear = false;
  @Input() skeletonHeight = '2rem';
  @Input() loading = false;
  @Input() control: FormControl;
  @Input() formGroup: FormGroup; // Form Group
  @Input() formControlKey: string; // unique key used to identify control
  @Input() errorMessage: string;
  @Input() filterBy = null;
  @Input() isFormGroupControl = false;

  //multi select only
  @Input() isMultiple = false;
  @Input() display = 'chip'; //chip
  @Input() multiDatas = [];
  @Input() optionValue = '';

  @Output() dataChange = new EventEmitter<any>();
  @Output() onDropChange = new EventEmitter<any>();

  @Output() multiDatasChange = new EventEmitter<any>();

  private ValidatorsArray: any[] = [];

  private valueChangesSubscription: Subscription;

  constructor() { }

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


    if (this.isFormGroupControl) {
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

  onModelChange(val: any) {
    if (this.formControlKey && this.isFormGroupControl) {
      const key = this.formControlKey.toString()
      if (this.formGroup?.get(key)?.value !== val) {
        this.formGroup?.get(key)?.setValue(val);
      }
    }


    this.dataChange.emit(val);
  }

  onMultiDatasModelChange(val: any) {
    this.multiDatas = val;
    this.multiDatasChange.emit(this.multiDatas);
  }

  changeValue(event: any) {
    this.onDropChange.emit(event.value);
  }

  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }
}
