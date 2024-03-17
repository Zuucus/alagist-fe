import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  OnDestroy
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'zoo-autocomplete',
  templateUrl: './zoo-autocomplete.component.html',
  styleUrls: ['./zoo-autocomplete.component.scss'],
})
export class ZooAutocompleteComponent implements OnInit, OnDestroy {
  @Input() label = '';
  @Input() labelClass = 'text-sm';
  @Input() required = false;
  @Input() data = '';
  @Input() filterFieldName = '';
  @Input() showEmptyMessage = true;
  @Input() minLength = 0;
  @Input() showClear = true;
  @Input() isMultiple = false;
  @Input() disabled = false;
  @Input() suggestionsList: any = [];
  @Input() placeholder = 'Search';
  @Input() icon = 'pi pi-search';
  @Input() isIcon = true;
  @Input() delay = 300;
  @Input() control: FormControl;
  @Input() formGroup: FormGroup; // Form Group
  @Input() formControlKey: string; // unique key used to identify control
  @Input() errorMessage: string;
  @Input() skeletonHeight = '2rem';
  @Input() loading = false;
  @Input() customTeplateRef: TemplateRef<any>;
  @Input() isFormGroupControl = false;

  @Output() dataChange = new EventEmitter<any>();

  @Output() searchKeyChange = new EventEmitter<any>();

  @Output() onSelectChange = new EventEmitter<any>();

  @Output() onClearClick = new EventEmitter<any>();

  @Output() onBlur = new EventEmitter<any>();

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

  search(event: any) {
    let query = event.query;
    this.searchKeyChange.emit(query);
  }

  selectionChange(event: any) {
    this.onSelectChange.emit(event);
  }

  onClearInput() {
    this.data = '';
    this.dataChange.emit('');
    this.onClearClick.emit();
  }

  onFocusOut() {
    this.onBlur.emit();
  }

  ngOnDestroy() {
    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }
}
