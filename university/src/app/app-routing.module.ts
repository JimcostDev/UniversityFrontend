import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseInstructorDeleteComponent } from './component/course-instructor-delete/course-instructor-delete.component';
import { CourseInstructorEditComponent } from './component/course-instructor-edit/course-instructor-edit.component';
import { CourseInstructorListComponent } from './component/course-instructor-list/course-instructor-list.component';
import { CourseInstructorSaveComponent } from './component/course-instructor-save/course-instructor-save.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseSaveComponent } from './component/course-save/course-save.component';
import { DepartmentEditComponent } from './component/department-edit/department-edit.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { DepartmentSaveComponent } from './component/department-save/department-save.component';
import { EnrollmentDeleteComponent } from './component/enrollment-delete/enrollment-delete.component';
import { EnrollmentEditComponent } from './component/enrollment-edit/enrollment-edit.component';
import { EnrollmentListComponent } from './component/enrollment-list/enrollment-list.component';
import { EnrollmentSaveComponent } from './component/enrollment-save/enrollment-save.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { InstructorSaveComponent } from './component/instructor-save/instructor-save.component';
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
  { path:'instructor-list', component: InstructorListComponent },
  { path:'instructor-save', component: InstructorSaveComponent },
  { path:'instructor-edit/:id', component: InstructorEditComponent },
  { path:'instructor-delete/:id', component: InstructorDeleteComponent },
  { path:'enrollment-list', component: EnrollmentListComponent },
  { path:'enrollment-save', component: EnrollmentSaveComponent },
  { path:'enrollment-edit/:id', component: EnrollmentEditComponent },
  { path:'enrollment-delete/:id', component: EnrollmentDeleteComponent },
  { path:'courseInstructor-list', component: CourseInstructorListComponent },
  { path:'courseInstructor-save', component: CourseInstructorSaveComponent },
  { path:'courseInstructor-edit/:id', component: CourseInstructorEditComponent },
  { path:'courseInstructor-delete/:id', component: CourseInstructorDeleteComponent },
  { path:'department-list', component: DepartmentListComponent },
  { path:'department-save', component: DepartmentSaveComponent },
  { path:'department-edit/:id', component: DepartmentEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
