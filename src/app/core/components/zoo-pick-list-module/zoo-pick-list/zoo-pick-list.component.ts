import { Component, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';

@Component({
  selector: 'zoo-pick-list',
  templateUrl: './zoo-pick-list.component.html',
  styleUrls: ['./zoo-pick-list.component.scss'],
})
export class ZooPickListComponent implements OnInit {
  target: any[] = [];
  progressBar: boolean = false;
  @Input() source: any = [];
  @Input() showSourceFilter: boolean = true;
  @Input() showTargetFilter: boolean = true;
  @Input() dragdrop: boolean = true;
  @Input() sourceHeader: string = 'Source';
  @Input() targetHeader: string = 'Target';
  @Input() showSourceControls: boolean = true;
  @Input() showTargetControls: boolean = true;
  @Input() stripedRows: boolean = true;
  @Input() responsive: boolean = true;
  @Input() filterBy: string = 'label';
  @Input() sourceFilterPlaceholder: string = 'Search';
  @Input() contentTemplateRef: TemplateRef<any>;

  @Output() targetChange: any;
  constructor(private zooMessageService: ZooMessageService) {}

  ngOnInit(): void {}
  onMoveToTarget(event: any) {}
  onMoveToSource(event: any) {}
  onMoveAllToTarget(event: any) {}
  onMoveAllToSource(event: any) {}
}
