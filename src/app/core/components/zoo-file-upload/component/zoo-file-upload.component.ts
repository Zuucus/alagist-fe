import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'zoo-file-upload',
  templateUrl: './zoo-file-upload.component.html',
})
export class ZooFileUploadComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload: FileUpload;

  @Input() name = 'myfile';
  @Input() isMultiple = false;
  @Input() accept = '';
  @Input() maxFileSize = 1;
  @Input() showUploadButton = false;
  @Input() showCancelButton = false;
  @Input() chooseIcon = 'pi pi-upload';
  @Input() label = '';
  @Input() required = false;
  @Input() data = '';
  @Input() mode = 'advanced'; //basic
  @Input() customUpload = true;
  @Input() loading = false;
  @Output() dataChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  myUploader(event: any) {
    this.dataChange.emit(event.files);
  }

  onBasicUpload(event: any) {
    this.dataChange.emit(event.files);
  }

  onClear() {
    this.fileUpload.clear();
  }
}
