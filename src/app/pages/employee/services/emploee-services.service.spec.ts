import { TestBed } from '@angular/core/testing';

import { EmploeeServicesService } from './emploee-services.service';

describe('EmploeeServicesService', () => {
  let service: EmploeeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploeeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
