import { TestBed } from '@angular/core/testing';

import { UserCoreService } from './user-core.service';

describe('UserCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCoreService = TestBed.get(UserCoreService);
    expect(service).toBeTruthy();
  });
});
