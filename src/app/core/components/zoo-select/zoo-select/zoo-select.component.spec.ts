import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooSelectComponent } from './zoo-select.component';

describe('ZooSelectComponent', () => {
  let component: ZooSelectComponent;
  let fixture: ComponentFixture<ZooSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
