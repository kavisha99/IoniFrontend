import { TestBed } from '@angular/core/testing';

import { HomeworkServiceService } from './homework-service.service';

describe('HomeworkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeworkServiceService = TestBed.get(HomeworkServiceService);
    expect(service).toBeTruthy();
  });
});
