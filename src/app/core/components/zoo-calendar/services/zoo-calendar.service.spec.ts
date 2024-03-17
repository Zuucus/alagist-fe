import { TestBed } from '@angular/core/testing';

import { ZooCalendarService } from './zoo-calendar.service';

describe('ZooCalendarService', () => {
  let service: ZooCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZooCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
