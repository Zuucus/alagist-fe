import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooTabsComponent } from './zoo-tabs.component';

describe('ZooTabsComponent', () => {
  let component: ZooTabsComponent;
  let fixture: ComponentFixture<ZooTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
