import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Courses
import { CourseService } from './service/course.service';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseSaveComponent } from './component/course-save/course-save.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';

//Students
import { StudentService } from './service/student.service';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentSaveComponent } from './component/student-save/student-save.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';

//Instructors
import { InstructorService } from './service/instructor.service';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorSaveComponent } from './component/instructor-save/instructor-save.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';

//Enrollments
import { EnrollmentService } from './service/enrollment.service';
import { EnrollmentListComponent } from './component/enrollment-list/enrollment-list.component';
import { EnrollmentSaveComponent } from './component/enrollment-save/enrollment-save.component';
import { EnrollmentEditComponent } from './component/enrollment-edit/enrollment-edit.component';
import { EnrollmentDeleteComponent } from './component/enrollment-delete/enrollment-delete.component';






@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseSaveComponent,
    StudentListComponent,
    CourseEditComponent,
    CourseDeleteComponent,
    StudentSaveComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    InstructorListComponent,
    InstructorEditComponent,
    InstructorSaveComponent,
    InstructorDeleteComponent,
    EnrollmentListComponent,
    EnrollmentSaveComponent,
    EnrollmentEditComponent,
    EnrollmentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CourseService,
    StudentService,
    InstructorService,
    EnrollmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
