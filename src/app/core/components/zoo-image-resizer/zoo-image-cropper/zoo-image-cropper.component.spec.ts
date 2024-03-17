import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooImageCropperComponent } from './zoo-image-cropper.component';

describe('ZooImageCropperComponent', () => {
  let component: ZooImageCropperComponent;
  let fixture: ComponentFixture<ZooImageCropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooImageCropperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooImageCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
