import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'zoo-image-upload',
  templateUrl: './zoo-image-upload.component.html',
  styleUrls: ['./zoo-image-upload.component.scss']
})
export class ZooImageUploadComponent implements OnInit {

  @Input() name ='myfile';
  @Input() isMultiple =false;
  @Input() accept='';
  @Input() maxFileSize=1;
  @Input() showUploadButton=false;
  @Input() showCancelButton=false;
  @Input() chooseIcon='pi pi-upload'
  @Input() label ='';
  @Input() required =false;
  @Input() data=''
  @Input() mode='advanced'//basic
  @Input() customUpload=true

  @Output() dataChange = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {

  }



myUploader(event:any){
  this.dataChange.emit(event.files)

}

onBasicUpload(event:any){
  this.dataChange.emit(event.files)
}


}
