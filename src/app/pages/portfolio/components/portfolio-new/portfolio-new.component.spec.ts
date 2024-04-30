import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNewComponent } from './portfolio-new.component';

describe('PortfolioNewComponent', () => {
  let component: PortfolioNewComponent;
  let fixture: ComponentFixture<PortfolioNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioNewComponent]
    });
    fixture = TestBed.createComponent(PortfolioNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
