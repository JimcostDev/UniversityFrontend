import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { Enrollment } from 'src/app/domain/enrollment';
import { Student } from 'src/app/domain/student';
import { CourseService } from 'src/app/service/course.service';
import { EnrollmentService } from 'src/app/service/enrollment.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-enrollment-edit',
  templateUrl: './enrollment-edit.component.html',
  styleUrls: ['./enrollment-edit.component.css']
})
export class EnrollmentEditComponent implements OnInit {

  public id!: number;
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
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
    this.getCourses();
    this.getStudents();
  }
  public getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');    
    this.id = Number(param);

    this.enrollmentService.getById(this.id).subscribe(data => {      
      this.enrollment = data;
    });
  }

  public edit(){
    console.log(this.enrollment);
    
    this.enrollmentService.edit(this.enrollment).subscribe(data => {
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
