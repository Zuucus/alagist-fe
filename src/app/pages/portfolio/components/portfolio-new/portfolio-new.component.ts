import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';
import { PorfolioService } from '../../services/porfolio.service';
import { UtilityService } from 'src/app/core/services/utility.service';
import { ZooImageResizerComponent } from 'src/app/core/components/zoo-image-resizer/zoo-image-resizer/zoo-image-resizer.component';

@Component({
  selector: 'app-portfolio-new',
  templateUrl: './portfolio-new.component.html',
  styleUrls: ['./portfolio-new.component.scss']
})
export class PortfolioNewComponent {

  @ViewChild(ZooImageResizerComponent) imageResizer: ZooImageResizerComponent;

  breadCrumbItems: any[] = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Portfolio', routerLink: '/portfolio' },
    { label: 'New', routerLink: '/portfolio/new' },
  ];

  formGroup: FormGroup = new FormGroup([]);
  progressBar = false;
  serviceList: any = [];
  minDate= new Date();
  image: any;

  genderOptionsList = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];


  // images section variables
  images: any[] = [];

  uploadImage: File | any;

  originalImage: File | any;

  uploadImageBase64: string = '';


  portfolio:any = {
  };



  constructor(private changeDetector: ChangeDetectorRef,
    private porfolioService: PorfolioService,
    private zooMessageService: ZooMessageService,
    private router: Router,
    private utilityService: UtilityService) {}



    getServiceList(event: any) {
    this.progressBar = true;
    this.serviceList = [];
    this.progressBar = false;
  }

  onSelectDateChange() {
    console.log(this.portfolio);
  }

  OnTimeChange(event: any) {
    console.log(event);
  }

  save() {
    console.log(this.portfolio);
    this.progressBar =true;
    this.porfolioService.addPortFolio(this.portfolio).subscribe({
      next: (response) => {
        this.progressBar = false;
        this.zooMessageService.sendSuccess('Portfolio added successfully');
        this.router.navigate(['/portfolio']);
      },
      error: (error) => {
        this.progressBar = false;
        this.zooMessageService.sendError('Error while adding portfolio');
      }
    })
  }

  OnCancel() {
    console.log('cancel');
    this.router.navigate(['/portfolio']);
  }

  onFileChange(file: File | any) {
    this.getBase64(file, (e: any) => {
      this.uploadImageBase64 = e.target.result;
    });
  }

  onOriginalChange(original: File | any) {
    this.originalImage = original;
  }

  getBase64(file: any, callback: any, callbackError: any = null) {
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = callback;
    if (callbackError) {
      reader.onerror = callbackError;
    }
  }

  onCrop() {
    this.images.push({
      url: this.uploadImageBase64,
      original: this.originalImage,
      file: this.uploadImage,
      metal: {},
      styleClasses: '',
      timer: null,
      uniqueId: this.utilityService.genUniqueId(),
      id: null,
    });

    this.onClearImage();
  }

  onClearImage() {
    this.uploadImage = null;
    this.originalImage = null;
    this.uploadImageBase64 = '';
    this.imageResizer.clear();
  }

  onRemoveImageItem(id: string) {
    // this.images.splice(index, 1);
    const index = this.images.findIndex((item) => item.uniqueId === id);
    this.images[index].styleClasses = 'removing-img';
    this.images[index].timer = setTimeout(() => {
      this.removeImageItem(id);
    }, 7500);
  }

  onUndoRemoveImageItem(id: string) {
    const index = this.images.findIndex((item) => item.uniqueId === id);
    this.images[index].styleClasses = '';
    clearTimeout(this.images[index].timer);
  }

  private removeImageItem(id: string) {
    const index = this.images.findIndex((item) => item.uniqueId === id);
    clearTimeout(this.images[index].timer);
    this.images.splice(index, 1);
  }


  }

