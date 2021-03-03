import { Component, OnInit } from '@angular/core';
import { CourseInstructor } from 'src/app/domain/course-instructor';
import { Subscription } from 'rxjs';
import { CourseInstructorService } from 'src/app/service/course-instructor.service';

@Component({
  selector: 'app-course-instructor-list',
  templateUrl: './course-instructor-list.component.html',
  styleUrls: ['./course-instructor-list.component.css']
})
export class CourseInstructorListComponent implements OnInit {

  public courseInstructors: CourseInstructor[] = [];
  public subCourseInstructors: Subscription = new Subscription;

  constructor(public courseInstructorService: CourseInstructorService) { }

  ngOnDestroy(): void {
    this.subCourseInstructors.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.subCourseInstructors = this.courseInstructorService.getAll().subscribe(data => {
      this.courseInstructors = data;
    });
  }

}
