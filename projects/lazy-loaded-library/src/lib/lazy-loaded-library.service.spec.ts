import { TestBed } from '@angular/core/testing';

import { LazyLoadedLibraryService } from './lazy-loaded-library.service';

describe('LazyLoadedLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyLoadedLibraryService = TestBed.get(LazyLoadedLibraryService);
    expect(service).toBeTruthy();
  });
});
