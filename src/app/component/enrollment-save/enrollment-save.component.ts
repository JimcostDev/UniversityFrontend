import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { Enrollment } from 'src/app/domain/enrollment';
import { Instructor } from 'src/app/domain/instructor';
import { Student } from 'src/app/domain/student';
import { CourseService } from 'src/app/service/course.service';
import { EnrollmentService } from 'src/app/service/enrollment.service';
import { StudentService } from 'src/app/service/student.service';


@Component({
  selector: 'app-enrollment-save',
  templateUrl: './enrollment-save.component.html',
  styleUrls: ['./enrollment-save.component.css']
})
export class EnrollmentSaveComponent implements OnInit {

  public enrollment!: Enrollment;
  public subCourses: Subscription = new Subscription;
  public courses: Course[] = [];
  public subStudents: Subscription = new Subscription;
  public students: Student[] = [];

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public enrollmentService: EnrollmentService,
    public studentService: StudentService,
    public courseService: CourseService,
    private router: Router) { }
  ngOnInit(): void {
    this.enrollment = new Enrollment(0, 0, 0, 0,new Course(0,'',0),new Student(0,'','',new Date(),''));
    this.getCourses();
    this.getStudents();
  }
  public save() {

    console.log(this.enrollment);
    
    this.enrollmentService.save(this.enrollment).subscribe(data => {
      this.router.navigate(['/enrollment-list']);
    },error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

  getCourses() {
    this.subCourses = this.courseService.getAll().subscribe(data => {
      this.courses = data;
    });
  }

  getStudents() {
    this.subStudents = this.studentService.getAll().subscribe(data => {
      this.students = data;
    });
  }

}
