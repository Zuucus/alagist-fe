import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooRadioComponent } from './zoo-radio.component';

describe('ZooRadioComponent', () => {
  let component: ZooRadioComponent;
  let fixture: ComponentFixture<ZooRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
