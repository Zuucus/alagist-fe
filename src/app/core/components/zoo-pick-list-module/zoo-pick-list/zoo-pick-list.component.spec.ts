import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooPickListComponent } from './zoo-pick-list.component';

describe('ZooPickListComponent', () => {
  let component: ZooPickListComponent;
  let fixture: ComponentFixture<ZooPickListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooPickListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
