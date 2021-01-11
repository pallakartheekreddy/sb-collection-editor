import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseEditorComponent } from './course-editor/course-editor.component';

const routes: Routes = [
  {
    path: 'edit/collection/:collectionId/:type', component: CourseEditorComponent, pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
