import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooDateComponent } from './zoo-date.component';

describe('ZooDateComponent', () => {
  let component: ZooDateComponent;
  let fixture: ComponentFixture<ZooDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
