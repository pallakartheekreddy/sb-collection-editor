import { TestBed } from '@angular/core/testing';

import { CourseEditorLibraryService } from './course-editor-library.service';

describe('CourseEditorLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseEditorLibraryService = TestBed.get(CourseEditorLibraryService);
    expect(service).toBeTruthy();
  });
});
