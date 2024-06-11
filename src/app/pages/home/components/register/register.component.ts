import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { an, co } from '@fullcalendar/core/internal-common';
import { ZooImageResizerComponent } from 'src/app/core/components/zoo-image-resizer/zoo-image-resizer/zoo-image-resizer.component';
import { UtilityService } from 'src/app/core/services/utility.service';
import { RegistrationService } from '../../services/registration.service';
import { ZooMessageService } from 'src/app/core/services/zoo-message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @ViewChild(ZooImageResizerComponent) imageResizer: ZooImageResizerComponent;

  public formGroup: FormGroup = new FormGroup([]);

  categoryList: any = [];

  progressBar: boolean = false;
  currentStep: number = 1;

  register:any = {
  };

  serviceList: any = [];
  services: any = [];

  stepItems = [
    {
      label: 'Register',
    },
    {
      label: 'Business Details',
    },
    {
      label: 'Business Categories',
    },
    {
      label: 'Business Information',
    },
    {
      label: 'Business Hours'
    },
    {
      label: 'Services'
    },
    {
      label: 'Finish'
    }
  ];

    // images section variables
    images: any[] = [];

    uploadImage: File | any;

    originalImage: File | any;

    uploadImageBase64: string = '';

        // images section variables
        coverImages: any[] = [];

        uploadCoverImage: File | any;

        originalCoverImage: File | any;

        uploadCoverImageBase64: string = '';


  categorySelectionList: any = [
];

teamSizeList: any = [
  { name: 'Just Me', value: 1 },
  { name: '2-3 Staff Members', value: 1 },
  { name: '4-6 Staff Members', value: 4-6 },
  { name: 'More than 6 Staff Members', value: 7 },
];

businessHoursList: any = [
  {
    name: 'Sunday',
    value: 'sunday',
    start: '',
    end: '',
    isOpen: false

 },
 {
    name: 'Monday',
    value: 'monday',
    start: new Date(
      '1970-01-01T09:00:00'
    ),
    end: new Date(
      '1970-01-01T18:00:00'
    ),
    isOpen: true
  },
  {
    name: 'Tuesday',
    value: 'tuesday',
    start: new Date(
      '1970-01-01T09:00:00'
    ),
    end: new Date(
      '1970-01-01T18:00:00'
    ),
    isOpen: true
  },
  {
    name: 'Wednesday',
    value: 'wednesday',
    start: new Date(
      '1970-01-01T09:00:00'
    ),
    end: new Date(
      '1970-01-01T18:00:00'
    ),
    isOpen: true
  },
  {
    name: 'Thursday',
    value: 'thursday',
    start: new Date(
      '1970-01-01T09:00:00'
    ),
    end: new Date(
      '1970-01-01T18:00:00'
    ),
    isOpen: true
  },
  {
    name: 'Friday',
    value: 'friday',
    start: new Date(
      '1970-01-01T09:00:00'
    ),
    end: new Date(
      '1970-01-01T18:00:00'
    ),
    isOpen: true
  },
  {
    name: 'Saturday',
    value: 'saturday',
    start: '',
    end: '',
    isOpen: false
  },

];


  constructor(private router:Router,
    private utilityService:UtilityService,
    private registrationService:RegistrationService,
    private zooMessageService : ZooMessageService) { }


  getServiceList(val:any){
    console.log(val);
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

    this.registrationService.uploadVendorLogo({
      logo: this.uploadImage,
    }).subscribe({
      next: (response: any) => {
        this.zooMessageService.sendSuccess('Logo uploaded successfully');
      },
      error: (error: any) => {
        this.zooMessageService.sendError('Error uploading logo');
      },
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


  onFileCoverChange(file: File | any) {
    this.getBase64(file, (e: any) => {
      this.uploadCoverImageBase64 = e.target.result;
    });
  }

  onOriginalCoverChange(original: File | any) {
    this.originalCoverImage = original;
  }

  getCoverBase64(file: any, callback: any, callbackError: any = null) {
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

  onCoverCrop() {
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

    this.registrationService.uploadVendorCover({
      cover: this.uploadCoverImage,
    }).subscribe({
      next: (response: any) => {
        this.zooMessageService.sendSuccess('Cover uploaded successfully');
      },
      error: (error: any) => {
        this.zooMessageService.sendError('Error uploading cover');
      },
    });

    this.onClearCoverImage();
  }

  onClearCoverImage() {
    this.uploadImage = null;
    this.originalImage = null;
    this.uploadImageBase64 = '';
    this.imageResizer.clear();
  }

  onRemoveCoverImageItem(id: string) {
    // this.images.splice(index, 1);
    const index = this.images.findIndex((item) => item.uniqueId === id);
    this.images[index].styleClasses = 'removing-img';
    this.images[index].timer = setTimeout(() => {
      this.removeCoverImageItem(id);
    }, 7500);
  }

  onUndoRemoveCoverImageItem(id: string) {
    const index = this.images.findIndex((item) => item.uniqueId === id);
    this.images[index].styleClasses = '';
    clearTimeout(this.images[index].timer);
  }

  private removeCoverImageItem(id: string) {
    const index = this.images.findIndex((item) => item.uniqueId === id);
    clearTimeout(this.images[index].timer);
    this.coverImages.splice(index, 1);
  }


  onBack(){
    this.currentStep--;
  }

  onNext(){
    if(this.currentStep == 0){
      this.registerVendor();
    }else if(this.currentStep == 1){
      this.getVendorOtp();
      this.getCatgories();
    } else if(this.currentStep == 2){
     console.log(this.categoryList);
      this.updateBusinessCategory();
    }
    this.currentStep++;

  }

  updateBusinessCategory() {
    let data = {
     vendorId: 2,
     businessCatId: this.categoryList[0].id,

    };
    this.registrationService.updateBusinessCategory(data).subscribe({
      next: (response: any) => {
        this.zooMessageService.sendSuccess('Categories updated successfully');
      },
      error: (error: any) => {
        this.zooMessageService.sendError('Error updating categories');
      },
    });
  }


  getCatgories() {
    this.registrationService.getBusinessCategoriesUrl().subscribe({
      next: (response: any) => {
        this.categorySelectionList = response.data;
      },
      error: (error: any) => {
        this.zooMessageService.sendError('Error fetching categories');
      },
    });
  }


  getVendorOtp() {
   let  data = {
    userId:3,
    businessName: this.register.businessName,
    name: this.register.name,
    contactNumber: this.register.contactNumber,
      password: this.register.password,
      confirmPassword: this.register.confirmPassword,

    };
    this.registrationService.getRegisterOtpUrl(data).subscribe({
      next: (response: any) => {
        this.zooMessageService.sendSuccess('Email sent successfully');
      },
      error: (error: any) => {
        this.zooMessageService.sendError('Error sending email');
      },
    });
  }


  registerVendor() {
    let data = {
      email: this.register.email,
      password: this.register.password,
      confirmPassword: this.register.confirmPassword,
    };
    this.registrationService.createVendorUrl(data).subscribe({
      next: (response: any) => {
        this.zooMessageService.sendSuccess('Email sent successfully');
      },
      error: (error: any) => {
        this.zooMessageService.sendError('Error sending email');
      },
    });

    }

  OnTimeChange(event: any) {
    console.log(event);
  }

  addService(){
    this.services.push({
      name: '',
      price: '',
      duration: '',
      description: ''
    });
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

}

