import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfficeAssignment } from 'src/app/domain/office-assignment';
import { OfficeAssignmentService } from 'src/app/service/office-assignment.service';

@Component({
  selector: 'app-office-assignment-save',
  templateUrl: './office-assignment-save.component.html',
  styleUrls: ['./office-assignment-save.component.css']
})
export class OfficeAssignmentSaveComponent implements OnInit {

  public officeAssignment!: OfficeAssignment;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public officeAssignmentService: OfficeAssignmentService,
    private router: Router) { }

    ngOnInit(): void {
      this.officeAssignment = new OfficeAssignment(0, '')
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

}
