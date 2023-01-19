import { TestBed } from '@angular/core/testing';

import { ChildGuard } from './child.service';

describe('ChildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChildGuard = TestBed.get(ChildGuard);
    expect(service).toBeTruthy();
  });
});
