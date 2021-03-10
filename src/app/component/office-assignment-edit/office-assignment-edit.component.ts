import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Instructor } from 'src/app/domain/instructor';
import { OfficeAssignment } from 'src/app/domain/office-assignment';
import { InstructorService } from 'src/app/service/instructor.service';
import { OfficeAssignmentService } from 'src/app/service/office-assignment.service';

@Component({
  selector: 'app-office-assignment-edit',
  templateUrl: './office-assignment-edit.component.html',
  styleUrls: ['./office-assignment-edit.component.css']
})
export class OfficeAssignmentEditComponent implements OnInit {

  public id!: number;
  public officeAssignment!: OfficeAssignment;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public officeAssignmentService: OfficeAssignmentService,
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.getById();
    }
  
    public getById(){
      let param = this.activatedRoute.snapshot.paramMap.get('id');    
      this.id = Number(param);
  
      this.officeAssignmentService.getById(this.id).subscribe(data => {      
        this.officeAssignment = data;
      });
    }
  
    public edit(){
      console.log(this.officeAssignment);
      
      this.officeAssignmentService.edit(this.officeAssignment).subscribe(data => {
        this.router.navigate(['/officeAssignment-list']);
      },error => {
        console.log(error);
        this.showMsg = true;
        this.msg = 'An error has ocurred in the procedure';
        this.type = 'danger';
      });
    }

}
