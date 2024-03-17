import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zoo-tabs',
  templateUrl: './zoo-tabs.component.html',
  styleUrls: ['./zoo-tabs.component.scss'],
})
export class ZooTabsComponent implements OnInit {
  @Input() items: any = [];
  @Input() activeItem: any = '';

  constructor() {}

  ngOnInit(): void {}
}
