import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuestionEditorLibraryModule } from 'question-editor-library';
import { CourseEditorLibraryModule } from 'course-editor-library';
import { AppComponent } from './app.component';
import { EditorRoutingModule } from './editor-routing.module';
import { CourseEditorComponent } from './course-editor/course-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseEditorComponent
  ],
  imports: [
    BrowserModule,
    QuestionEditorLibraryModule,
    CourseEditorLibraryModule,
    EditorRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
