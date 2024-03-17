import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsNewComponent } from './appointments-new.component';

describe('AppointmentsNewComponent', () => {
  let component: AppointmentsNewComponent;
  let fixture: ComponentFixture<AppointmentsNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentsNewComponent]
    });
    fixture = TestBed.createComponent(AppointmentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
