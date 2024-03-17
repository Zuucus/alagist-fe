import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, distinctUntilChanged } from 'rxjs';

function validateEmptyField(control: FormControl) {
  return control.value &&
    typeof control.value === 'string' &&
    !control.value.trim()
    ? {
        required: {
          valid: false,
        },
      }
    : null;
}

@Component({
  selector: 'zoo-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
})
export class ZooInputBoxComponent implements OnInit, OnDestroy, OnChanges {
  @Input() label = '';
  @Input() labelClass = 'text-sm';
  @Input() isFlotLabel = false;
  @Input() placeholder = 'Enter';
  @Input() type = 'text'; // number,email,password,textarea
  @Input() size = ''; //small,large
  @Input() data = '';
  @Input() isLeftIcon = false;
  @Input() isRightIcon = false;
  @Input() addOnContent = '';
  @Input() readonly = false;
  @Input() layout = 'column';
  @Input() required = false;
  @Input() disabled = false;
  @Input() icon = 'pi-search'; //if you pass icon make sure to change leftIcon or rightIcon as true
  @Input() control: FormControl;
  @Input() formGroup: FormGroup; // Form Group
  @Input() formControlKey: string; // unique key used to identify control
  @Input() regex: string;
  @Input() errorMessage: string;
  @Input() addOnSuffixButton = false;
  @Input() addOnSuffixIcon = 'pi-plus';
  @Input() skeletonHeight = '2rem';
  @Input() loading = false;
  @Input() isFormGroupControl = false;
  @Input() autofocus = false;

  //textArea only
  @Input() rows = 5;
  @Input() cols = 30;
  @Input() isAutoResize = false;
  @Input() textAreaFontClass = '';

  // number only
  @Input() showButtons = false;
  @Input() currency = 'USD';
  @Input() min = null;
  @Input() max = null;
  @Input() mode = 'decimal'; //currency
  @Input() inputId = 'withoutgrouping'; //minmaxfraction,minmax,locale-user,locale-us,locale-german
  @Input() useGrouping = false;
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() minFractionDigits = 0;
  @Input() maxFractionDigits = 2;

  //password only
  @Input() toggleMask = true;
  @Input() feedback = false;

  @Output() dataChange = new EventEmitter<any>();
  @Output() inputNumberChange = new EventEmitter<any>();
  @Output() suffixBtnClick = new EventEmitter<any>();
  @Output() onEnterClick = new EventEmitter<any>();
  @Output() onBlur = new EventEmitter<any>();
  @Output() onKeyUp = new EventEmitter<any>();
  @Output() onClick = new EventEmitter<any>();

  //textArea only
  @Output() textAreaResize = new EventEmitter<any>();

  private valueChangesSubscription: Subscription;
  @ViewChild('input') elementRef: any;

  private ValidatorsArray: any[] = [];

  get isRequired() {
    let required = this.required;
    if (this.control) {
      // console.log(this.formControlKey, this.control.validator);
      required = required || this.control.hasValidator(Validators.required);
    }

    return required && this.label;
  }

  constructor() {}

  ngOnInit(): void {
    this.ValidatorsArray = [];
    if (this.required) {
      this.ValidatorsArray.push(Validators.required);
    }
    if (this.type === 'email') {
      this.ValidatorsArray.push(Validators.email);
    }
    if (this.control) {
      if (this.control.validator) {
        this.ValidatorsArray.push(this.control.validator);
      }
      this.control.setValidators(this.ValidatorsArray);
    } else {
      this.control = new FormControl('', this.ValidatorsArray);
    }
    this.formGroup?.addControl(this.formControlKey.toString(), this.control);
    this.errorMessage = this.errorMessage
      ? this.errorMessage
      : this.getErrorMessage();
    //       this.placeholder =this.label!=='' &&this.placeholder===''?`Enter ${this.label}`:'Enter'
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

  ngAfterViewInit() {
    if (this.autofocus) {
      this.elementRef.input.nativeElement.focus();
    }
  }

  getErrorMessage() {
    return this.control.hasError('required')
      ? this.label + ' ' + 'is required'
      : this.control.hasError('email')
      ? 'Enter a Valid email'
      : '';
  }

  onModelChange(value: any) {
    this.data = value;
    if (this.formControlKey && this.isFormGroupControl) {
      const key = this.formControlKey.toString();
      if (this.formGroup?.get(key)?.value !== value) {
        this.formGroup?.get(key)?.setValue(value);
      }
    }
    this.dataChange.emit(this.data);
  }

  onResize(value: any) {
    this.textAreaResize.emit(value);
  }

  updateFormControl() {
    if (!this.control) {
      return;
    }
    this.control.clearValidators();
    this.ValidatorsArray = [];
    if (this.required) {
      this.ValidatorsArray.push(Validators.required);
      this.ValidatorsArray.push(validateEmptyField);
    }
    if (this.type === 'email') {
      this.ValidatorsArray.push(Validators.email);
    }
    this.control.setValidators(this.ValidatorsArray);
    this.control.updateValueAndValidity();
  }

  blur(event: any) {
    this.onBlur.emit(event);
  }

  onInputChange(value: any) {
    this.data = value.value;
    this.inputNumberChange.emit(value);
  }

  suffixButtonClick() {
    this.suffixBtnClick.emit(this.data);
  }

  onEnter() {
    this.onEnterClick.emit(this.data);
  }

  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formGroup']) {
      const formGroup = changes['formGroup'].currentValue;
      if (formGroup.controls[this.formControlKey]) {
        this.control = formGroup.controls[this.formControlKey];
      }
    }
  }

  keyup(event: any) {
    this.onKeyUp.emit(event);
  }

  click(event: any) {
    this.onClick.emit(event);
  }
}
