import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zoo-card',
  templateUrl: './zoo-card.component.html',
  styleUrls: ['./zoo-card.component.scss'],
})
export class ZooCardComponent implements OnInit {
  @Input() isHeaderBorder = true;

  @Input() isFooterBorder = false;

  @Input() isFooter = true;

  @Input() contentClass = 'p-3';

  @Input() headerClass = 'p-3';

  @Input() footerClass = '';

  @Input() isHeader = true;

  @Input() cardClass = 'stretch-card';

  constructor() {}

  ngOnInit(): void {}
}
