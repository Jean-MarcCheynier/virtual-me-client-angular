import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';

describe('ActionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateService = TestBed.get(StateService);
    expect(service).toBeTruthy();
  });
});
