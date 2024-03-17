import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooLabelComponent } from './zoo-label.component';

describe('ZooLabelComponent', () => {
  let component: ZooLabelComponent;
  let fixture: ComponentFixture<ZooLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
