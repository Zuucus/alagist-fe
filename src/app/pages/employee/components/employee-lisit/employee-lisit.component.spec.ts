import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLisitComponent } from './employee-lisit.component';

describe('EmployeeLisitComponent', () => {
  let component: EmployeeLisitComponent;
  let fixture: ComponentFixture<EmployeeLisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeLisitComponent]
    });
    fixture = TestBed.createComponent(EmployeeLisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
