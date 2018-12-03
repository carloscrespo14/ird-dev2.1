import { TestBed, inject } from '@angular/core/testing';

import { HttpCasesService } from './http-cases.service';

describe('HttpCasesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpCasesService]
    });
  });

  it('should be created', inject([HttpCasesService], (service: HttpCasesService) => {
    expect(service).toBeTruthy();
  }));
});
