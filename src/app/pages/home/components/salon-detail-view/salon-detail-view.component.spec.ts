import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonDetailViewComponent } from './salon-detail-view.component';

describe('SalonDetailViewComponent', () => {
  let component: SalonDetailViewComponent;
  let fixture: ComponentFixture<SalonDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonDetailViewComponent]
    });
    fixture = TestBed.createComponent(SalonDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
