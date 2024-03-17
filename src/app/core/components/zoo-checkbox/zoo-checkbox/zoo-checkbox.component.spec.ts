import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooCheckboxComponent } from './zoo-checkbox.component';

describe('ZooCheckboxComponent', () => {
  let component: ZooCheckboxComponent;
  let fixture: ComponentFixture<ZooCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
