/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GiaoVienService } from './GiaoVien.service';

describe('Service: GiaoVien', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiaoVienService]
    });
  });

  it('should ...', inject([GiaoVienService], (service: GiaoVienService) => {
    expect(service).toBeTruthy();
  }));
});
