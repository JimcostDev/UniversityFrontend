import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfficeAssignment } from 'src/app/domain/office-assignment';
import { OfficeAssignmentService } from 'src/app/service/office-assignment.service';

@Component({
  selector: 'app-office-assignment-list',
  templateUrl: './office-assignment-list.component.html',
  styleUrls: ['./office-assignment-list.component.css']
})
export class OfficeAssignmentListComponent implements OnInit {

  public officeAssignments: OfficeAssignment[] = [];
  public subOfficeAssignments: Subscription = new Subscription;

  constructor(public officeAssignmentService: OfficeAssignmentService) { }
  ngOnDestroy(): void {
    this.subOfficeAssignments.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.subOfficeAssignments = this.officeAssignmentService.getAll().subscribe(data => {
      this.officeAssignments = data;
    });
  }

}
