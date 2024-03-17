import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooImageResizerComponent } from './zoo-image-resizer.component';

describe('ZooImageResizerComponent', () => {
  let component: ZooImageResizerComponent;
  let fixture: ComponentFixture<ZooImageResizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooImageResizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooImageResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
