import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { ImageCroppedEvent } from '../zoo-image-cropper/zoo-image-cropper.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'zoo-image-resizer',
  templateUrl: './zoo-image-resizer.component.html',
  styleUrls: ['./zoo-image-resizer.component.scss'],
})
export class ZooImageResizerComponent implements OnInit, OnDestroy {
  @Input() label = '';
  @Input() required = false;
  @Input() data = '';
  @Input() maintainAspectRatio = true;
  @Input() aspectRatio = '1 / 1';
  @Input() resizeToWidth = 400;
  @Input() roundCropper = false;
  @Input() imageQuality = 80;
  @Input() disabledPreview = false;
  @Input() styleClasses = '';
  @Input() loading = false;

  filename = '';

  imageChangedEvent: any = '';
  croppedImage: any = '';
  cropperReady = false;
  uploadedFiles: any[] = [];

  @Output() dataChange = new EventEmitter<any>();
  Files: any;

  @Output() fileChange = new EventEmitter<any>();

  original: any;

  constructor() {}

  ngOnInit(): void {}

  clear() {
    this.croppedImage = '';
    this.imageChangedEvent = '';
    this.uploadedFiles = [];
    this.filename = '';
    this.dataChange.emit('');
    this.fileChange.emit('');
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.original = event.target.files[0];
    this.filename = this.original.name;
    this.fileChange.emit(this.original);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.Files = event.file;
    let fileName = this.filename.replace(/ /g, '-');
    let filedata = new File([this.Files], fileName, {
      type: 'image/jpeg',
      lastModified: Date.now(),
    });
    this.dataChange.emit(filedata);
  }

  imageLoaded() {
    this.cropperReady = true;
  }
  loadImageFailed() {}

  ngOnDestroy() {}
}
