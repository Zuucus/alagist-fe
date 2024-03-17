import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooSidebarComponent } from './zoo-sidebar.component';

describe('ZooSidebarComponent', () => {
  let component: ZooSidebarComponent;
  let fixture: ComponentFixture<ZooSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
