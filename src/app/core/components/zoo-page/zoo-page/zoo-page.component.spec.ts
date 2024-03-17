import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooPageComponent } from './zoo-page.component';

describe('ZooPageComponent', () => {
  let component: ZooPageComponent;
  let fixture: ComponentFixture<ZooPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
