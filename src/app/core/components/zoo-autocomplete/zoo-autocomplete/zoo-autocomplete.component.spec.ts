import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooAutocompleteComponent } from './zoo-autocomplete.component';

describe('ZooAutocompleteComponent', () => {
  let component: ZooAutocompleteComponent;
  let fixture: ComponentFixture<ZooAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZooAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZooAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
