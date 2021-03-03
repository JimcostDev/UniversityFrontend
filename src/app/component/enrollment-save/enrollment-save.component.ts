import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { Enrollment } from 'src/app/domain/enrollment';
import { Student } from 'src/app/domain/student';
import { EnrollmentService } from 'src/app/service/enrollment.service';

@Component({
  selector: 'app-enrollment-save',
  templateUrl: './enrollment-save.component.html',
  styleUrls: ['./enrollment-save.component.css']
})
export class EnrollmentSaveComponent implements OnInit {

  public enrollment!: Enrollment;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public enrollmentService: EnrollmentService,
    private router: Router) { }
  ngOnInit(): void {
    this.enrollment = new Enrollment(0, 0, 0, 0);
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

}
