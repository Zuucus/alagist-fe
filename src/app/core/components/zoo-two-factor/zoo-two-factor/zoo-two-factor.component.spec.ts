import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooTwoFactorComponent } from './zoo-two-factor.component';

describe('ZooTwoFactorComponent', () => {
  let component: ZooTwoFactorComponent;
  let fixture: ComponentFixture<ZooTwoFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooTwoFactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooTwoFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
