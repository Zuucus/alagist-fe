import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zoo-label-wrap',
  templateUrl: './zoo-label-wrap.component.html',
  styleUrls: ['./zoo-label-wrap.component.scss'],
})
export class ZooLabelWrapComponent implements OnInit {
  @Input() key = '';
  @Input() keyColor = '';
  @Input() keyFontSize = '14px';
  @Input() keyFontWeight = '500';
  @Input() keyTextAlign = 'start';
  @Input() keyPadding = '0 0 0 0';
  @Input() value = '';
  @Input() valueColor = '#616161';
  @Input() valueFontSize = '0.875rem';
  @Input() valueFontWeight = '';
  @Input() valueTextAlign = 'center';
  @Input() valueMargin = '0 0 0 0';
  @Input() valueBackgroundColor = '#f8f9fa';
  @Input() valuePadding = '0.5rem 1rem 0.5rem 1rem';
  @Input() valueBorderRadius = '10px';
  @Input() loading = false;
  @Input() skeletonHeight = '2rem';
  @Input() isWhiteSpacePre = false;
  @Input() valueClass = 'cursor-auto';
  @Input() layout = 'column';

  get text() {
    if (!this.value) {
      return '';
    }
    return this.value.toString().replace(/\n/g, '<br>');
  }

  constructor() {}

  ngOnInit(): void {}
}
