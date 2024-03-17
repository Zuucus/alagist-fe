import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooCardComponent } from './zoo-card.component';

describe('ZooCardComponent', () => {
  let component: ZooCardComponent;
  let fixture: ComponentFixture<ZooCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
