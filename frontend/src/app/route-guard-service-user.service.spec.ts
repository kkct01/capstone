import { TestBed } from '@angular/core/testing';

import { RouteGuardServiceUserService } from './route-guard-service-user.service';

describe('RouteGuardServiceUserService', () => {
  let service: RouteGuardServiceUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardServiceUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
