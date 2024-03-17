import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooDropDownComponent } from './zoo-drop-down.component';

describe('ZooDropDownComponent', () => {
  let component: ZooDropDownComponent;
  let fixture: ComponentFixture<ZooDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooDropDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
