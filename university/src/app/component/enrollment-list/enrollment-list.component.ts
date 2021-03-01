import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Enrollment } from 'src/app/domain/enrollment';
import { EnrollmentService } from 'src/app/service/enrollment.service';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {

  public enrollments: Enrollment[] = [];
  public subEnrollments: Subscription = new Subscription;

  constructor(public enrollmentService: EnrollmentService) { }

  ngOnDestroy(): void {
    this.subEnrollments.unsubscribe();
  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.subEnrollments = this.enrollmentService.getAll().subscribe(data => {
      this.enrollments = data;
    });
  }

}
