import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


type ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';
@Component({
  selector: 'zoo-button',
  templateUrl: './zoo-button.component.html',
  styleUrls: ['./zoo-button.component.scss'],
})

export class ZooButtonComponent implements OnInit {
  @Input() label = '';
  @Input() disabled = false;
  @Input() isLink = false;
  @Input() icon = '';
  @Input() status = ''; //secondary,success,info,warning,help,danger
  @Input() type = ''; //raised ,outlined,icon-only,rounded
  @Input() isText = false;
  @Input() isRounded = false;
  @Input() isIconOnly = false;
  @Input() size = 'sm'; //sm,lg
  @Input() color = '';
  @Input() tooltip = '';
  @Input() tooltipPosition = 'top';
  @Input() showDelay = 1000;
  @Input() tabIndex = 0;

  //pButton only
  @Input() isPbutton = false;
  @Input() iconPos : ButtonIconPosition = 'left';
  @Input() badge = '';
  @Input() badgeStatus = ''; //secondary,success,info,warning,help,danger
  @Input() loading = false;

  @Input() btnStyle = null;

  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onButtonClick(event: any) {
    this.onClick.emit(event);
  }
}
