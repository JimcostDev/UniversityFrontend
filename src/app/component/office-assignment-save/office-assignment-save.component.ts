import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Instructor } from 'src/app/domain/instructor';
import { OfficeAssignment } from 'src/app/domain/office-assignment';
import { InstructorService } from 'src/app/service/instructor.service';
import { OfficeAssignmentService } from 'src/app/service/office-assignment.service';

@Component({
  selector: 'app-office-assignment-save',
  templateUrl: './office-assignment-save.component.html',
  styleUrls: ['./office-assignment-save.component.css']
})
export class OfficeAssignmentSaveComponent implements OnInit {

  public officeAssignment!: OfficeAssignment;
  public subInstructors: Subscription = new Subscription;
  public instructors: Instructor[] = [];

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public officeAssignmentService: OfficeAssignmentService,
    public instructorService: InstructorService,
    private router: Router) { }

    ngOnInit(): void {
      this.officeAssignment = new OfficeAssignment(0, '',new Instructor(0,'','',new Date(),''));
      this.getInstructors();

    }
  
    public save() {
  
      console.log(this.officeAssignment);
      
      this.officeAssignmentService.save(this.officeAssignment).subscribe(data => {
        this.router.navigate(['/officeAssignment-list']);
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

}
