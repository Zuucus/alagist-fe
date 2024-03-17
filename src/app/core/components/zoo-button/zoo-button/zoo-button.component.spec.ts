import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooButtonComponent } from './zoo-button.component';

describe('ZooButtonComponent', () => {
  let component: ZooButtonComponent;
  let fixture: ComponentFixture<ZooButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
