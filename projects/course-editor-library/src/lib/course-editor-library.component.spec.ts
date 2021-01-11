import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditorLibraryComponent } from './course-editor-library.component';

describe('CourseEditorLibraryComponent', () => {
  let component: CourseEditorLibraryComponent;
  let fixture: ComponentFixture<CourseEditorLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEditorLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditorLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
