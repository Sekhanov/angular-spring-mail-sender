import { TestBed } from '@angular/core/testing';

import { MailHttpService } from './mail-http.service';

describe('MailHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailHttpService = TestBed.get(MailHttpService);
    expect(service).toBeTruthy();
  });
});
