import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'zoo-select',
  templateUrl: './zoo-select.component.html',
  styleUrls: ['./zoo-select.component.scss'],
})
export class ZooSelectComponent implements OnInit {
  @Input() label = '';
  @Input() labelClass = 'text-sm';
  @Input() required = false;
  @Input() stateOptions = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' },
  ];
  @Input() data = '';
  @Input() loading = false;
  @Input() skeletonHeight = '2rem';

  @Output() dataChange = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onModelChange(val: any) {
    this.dataChange.emit(val);
  }

  change(event: any) {
    this.onChange.emit(event);
  }
}
