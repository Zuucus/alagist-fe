import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'zoo-radio',
  templateUrl: './zoo-radio.component.html',
  styleUrls: ['./zoo-radio.component.scss'],
})
export class ZooRadioComponent implements OnInit {
  @Input() label = '';
  @Input() labelClass = 'text-sm';
  @Input() required = false;
  @Input() data = '';
  @Input() value = '';
  @Input() valueLabel = '';
  @Input() radioList: any = [{ name: '', key: '' }];
  @Input() loading = false;
  @Input() skeletonHeight = '1.3rem';
  @Input() skeletonWidth = '1.3rem';

  @Output() dataChange = new EventEmitter<any>();

  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onModelChange(val: any) {
    this.dataChange.emit(val);
  }

  onRadioClick(event: any) {
    this.onClick.emit(event);
  }
}
