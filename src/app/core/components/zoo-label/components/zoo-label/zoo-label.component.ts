import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zoo-label',
  templateUrl: './zoo-label.component.html',
  styleUrls: ['./zoo-label.component.scss']
})
export class ZooLabelComponent implements OnInit {

  @Input() label ='';
  @Input() labelClass='text-sm'

  constructor() { }

  ngOnInit(): void {
  }

}
