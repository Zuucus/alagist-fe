import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { emit } from 'process';

@Component({
  selector: 'zoo-dialog',
  templateUrl: './zoo-dialog.component.html',
  styleUrls: ['./zoo-dialog.component.scss'],
})
export class ZooDialogComponent implements OnInit {
  @Input() display = true;

  @Input() headerTitle = '';

  @Input() width = '50vw';

  @Input() modal = true;

  @Input() draggable = false;

  @Input() resizable = false;

  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    //this.close.emit('Diloag Closed');
  }
}
