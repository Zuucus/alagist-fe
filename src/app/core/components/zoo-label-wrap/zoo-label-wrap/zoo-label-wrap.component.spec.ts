import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooLabelWrapComponent } from './zoo-label-wrap.component';

describe('ZooLabelWrapComponent', () => {
  let component: ZooLabelWrapComponent;
  let fixture: ComponentFixture<ZooLabelWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooLabelWrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooLabelWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
