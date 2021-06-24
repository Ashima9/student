import { TestBed } from '@angular/core/testing';

import { SchoolinfoService } from './schoolinfo.service';

describe('SchoolinfoService', () => {
  let service: SchoolinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
