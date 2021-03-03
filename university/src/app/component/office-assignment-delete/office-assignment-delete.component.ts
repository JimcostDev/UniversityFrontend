import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfficeAssignment } from 'src/app/domain/office-assignment';
import { OfficeAssignmentService } from 'src/app/service/office-assignment.service';

@Component({
  selector: 'app-office-assignment-delete',
  templateUrl: './office-assignment-delete.component.html',
  styleUrls: ['./office-assignment-delete.component.css']
})
export class OfficeAssignmentDeleteComponent implements OnInit {

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
  
    public delete(){
      this.officeAssignmentService.delete(this.officeAssignment.InstructorID).subscribe(data => {
        this.router.navigate(['/officeAssignment-list']);
      },error => {
        console.log(error);
        this.showMsg = true;
        this.msg = 'An error has ocurred in the procedure';
        this.type = 'danger';
      });
    }

}
