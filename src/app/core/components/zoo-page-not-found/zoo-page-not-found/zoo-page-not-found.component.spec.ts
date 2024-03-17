import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooPageNotFoundComponent } from './zoo-page-not-found.component';

describe('ZooPageNotFoundComponent', () => {
  let component: ZooPageNotFoundComponent;
  let fixture: ComponentFixture<ZooPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooPageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
