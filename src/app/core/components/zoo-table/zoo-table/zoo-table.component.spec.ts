import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooTableComponent } from './zoo-table.component';

describe('ZooTableComponent', () => {
  let component: ZooTableComponent;
  let fixture: ComponentFixture<ZooTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
