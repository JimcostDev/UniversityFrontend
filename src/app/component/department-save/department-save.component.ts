import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/domain/department';
import { Instructor } from 'src/app/domain/instructor';
import { DepartmentService } from 'src/app/service/department.service';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-department-save',
  templateUrl: './department-save.component.html',
  styleUrls: ['./department-save.component.css']
})
export class DepartmentSaveComponent implements OnInit {

  public department!: Department;
  public subInstructors: Subscription = new Subscription;
  public instructors: Instructor[] = [];
  public instructorsFilter: Instructor[] = [];

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public departmentService: DepartmentService,
    public instructorService: InstructorService,
    private router: Router,
    public activatedRoute: ActivatedRoute,) { }

    ngOnDestroy(): void {
      this.subInstructors.unsubscribe();
    }

    ngOnInit(): void {
      this.department = new Department(0, '', 0, new Date(), 0, new Instructor(0,'','',new Date(),''));
      this.getInstructors() ;
    }
    public save() {
  
      console.log(this.department);
      
      this.departmentService.save(this.department).subscribe(data => {
        this.router.navigate(['/department-list']);
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
        this.instructorsFilter = [];

      // this.instructors.forEach(x => {
      //   this.instructorsFilter.push(x.Instructor);
      });
    }

}
