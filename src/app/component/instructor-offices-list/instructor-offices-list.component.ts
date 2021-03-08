import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Instructor } from 'src/app/domain/instructor';
import { OfficeAssignment } from 'src/app/domain/office-assignment';
import { InstructorService } from 'src/app/service/instructor.service';
import { OfficeAssignmentService } from 'src/app/service/office-assignment.service';

@Component({
  selector: 'app-instructor-offices-list',
  templateUrl: './instructor-offices-list.component.html',
  styleUrls: ['./instructor-offices-list.component.css'],
})
export class InstructorOfficesListComponent implements OnInit {
  public id: number = 0;
  public instructor: Instructor = new Instructor(0, '', '', new Date(), '');
  public offices: OfficeAssignment[] = [];
  public officesFilter: OfficeAssignment[] = [];
  public subOffices: Subscription = new Subscription();

  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';

  constructor(
    public instructorService: InstructorService,
    public officeService: OfficeAssignmentService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnDestroy(): void {
    this.subOffices.unsubscribe();
  }

  ngOnInit(): void {
    this.getInstructorById();
    this.getOfficesByInstructorId();
  }

  getInstructorById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.officeService.getById(this.id).subscribe((data) => {
      this.instructor = data;
    });
  }

  getOffices() {
    this.subOffices = this.officeService.getAll().subscribe((data) => {
      this.offices = data;
      this.officesFilter = [];
    });
  }

  getOfficesByInstructorId() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);
    this.getOffices();
  }
}
