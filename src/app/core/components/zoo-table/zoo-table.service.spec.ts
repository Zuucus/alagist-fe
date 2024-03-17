import { TestBed } from '@angular/core/testing';

import { ZooTableService } from './zoo-table.service';

describe('ZooTableService', () => {
  let service: ZooTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZooTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
