import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'zoo-checkbox',
  templateUrl: './zoo-checkbox.component.html',
  styleUrls: ['./zoo-checkbox.component.scss'],
})
export class ZooCheckboxComponent implements OnInit {
  @Input() label = '';
  @Input() labelClass = 'text-sm';
  @Input() required = false;
  @Input() data = '';
  @Input() value = '';
  @Input() valueLabel = '';
  @Input() checkboxList: any = [{ name: 'Accounting', key: 'A' }];
  @Input() isMultiple = false;
  @Input() layout = 'column';
  @Input() control: FormControl;
  @Input() formGroup: FormGroup; // Form Group
  @Input() formControlKey: string; // unique key used to identify control
  @Input() disabled = false;
  @Input() loading = false;
  @Input() skeletonHeight = '1.3rem';
  @Input() skeletonWidth = '1.3rem';
  @Input() errorMessage: string;

  @Output() dataChange = new EventEmitter<any>();

  @Output() checkChange = new EventEmitter<any>();

  private ValidatorsArray: any[] = [];

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
  }

  getErrorMessage() {
    return this.control.hasError('required')
      ? this.label
        ? this.label + ' ' + 'is required'
        : 'required'
      : '';
  }

  onModelChange(val: any) {
    this.dataChange.emit(val);
  }

  change(val: any) {
    this.checkChange.emit();
  }
}
