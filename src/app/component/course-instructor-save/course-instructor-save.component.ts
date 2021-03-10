import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { CourseInstructor } from 'src/app/domain/course-instructor';
import { Instructor } from 'src/app/domain/instructor';
import { CourseInstructorService } from 'src/app/service/course-instructor.service';
import { CourseService } from 'src/app/service/course.service';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-course-instructor-save',
  templateUrl: './course-instructor-save.component.html',
  styleUrls: ['./course-instructor-save.component.css']
})
export class CourseInstructorSaveComponent implements OnInit {

  public courseInstructor!: CourseInstructor;
  public subInstructors: Subscription = new Subscription;
  public instructors: Instructor[] = [];
  public subCourses: Subscription = new Subscription;
  public courses: Course[] = [];

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public courseInstructorService: CourseInstructorService,
    public instructorService: InstructorService,
    public courseService: CourseService,
    private router: Router) { }

  ngOnInit(): void {
    this.courseInstructor = new CourseInstructor(0, 0, 0, new Course(0,'',0), new Instructor(0,'','',new Date(),''));
    this.getInstructors();
    this.getCourses();
  }
  public save() {

    console.log(this.courseInstructor);
    
    this.courseInstructorService.save(this.courseInstructor).subscribe(data => {
      this.router.navigate(['/courseInstructor-list']);
    },error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

  getInstructors() {
    this.subInstructors = this.instructorService.getAll().subscribe(data => {
      this.instructors = data;
    });
  }

  getCourses() {
    this.subCourses = this.courseService.getAll().subscribe(data => {
      this.courses = data;
    });
  }

}
