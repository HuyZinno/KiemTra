/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HocphanService } from './Hocphan.service';

describe('Service: Hocphan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HocphanService]
    });
  });

  it('should ...', inject([HocphanService], (service: HocphanService) => {
    expect(service).toBeTruthy();
  }));
});
