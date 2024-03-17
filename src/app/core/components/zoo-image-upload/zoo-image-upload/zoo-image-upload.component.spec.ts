import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooImageUploadComponent } from './zoo-image-upload.component';

describe('ZooImageUploadComponent', () => {
  let component: ZooImageUploadComponent;
  let fixture: ComponentFixture<ZooImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooImageUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
