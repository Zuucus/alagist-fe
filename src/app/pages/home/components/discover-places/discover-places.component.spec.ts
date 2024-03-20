import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverPlacesComponent } from './discover-places.component';

describe('DiscoverPlacesComponent', () => {
  let component: DiscoverPlacesComponent;
  let fixture: ComponentFixture<DiscoverPlacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscoverPlacesComponent]
    });
    fixture = TestBed.createComponent(DiscoverPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
