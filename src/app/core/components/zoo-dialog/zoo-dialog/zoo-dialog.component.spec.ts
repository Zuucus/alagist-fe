import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooDialogComponent } from './zoo-dialog.component';

describe('ZooDialogComponent', () => {
  let component: ZooDialogComponent;
  let fixture: ComponentFixture<ZooDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
