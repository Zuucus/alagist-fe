import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooCalendarComponent } from './zoo-calendar.component';

describe('ZooCalendarComponent', () => {
  let component: ZooCalendarComponent;
  let fixture: ComponentFixture<ZooCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
