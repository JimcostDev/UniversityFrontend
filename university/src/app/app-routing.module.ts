import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseSaveComponent } from './component/course-save/course-save.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentSaveComponent } from './component/student-save/student-save.component';

const routes: Routes = [
  { path:'course-list', component: CourseListComponent },
  { path:'course-save', component: CourseSaveComponent },
  { path:'course-edit/:id', component: CourseEditComponent },
  { path:'course-delete/:id', component: CourseDeleteComponent },
  { path:'student-list', component: StudentListComponent },
  { path:'student-save', component: StudentSaveComponent },
  { path:'student-edit/:id', component: StudentEditComponent },
  { path:'student-delete/:id', component: StudentDeleteComponent },
  { path:'instructor-list', component: InstructorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
