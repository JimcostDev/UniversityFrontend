import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/domain/department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css'],
})
export class DepartmentEditComponent implements OnInit {
  public id!: number;
  public department!: Department;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(
    public departmentService: DepartmentService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getById();
  }

  public getById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.departmentService.getById(this.id).subscribe((data) => {
      this.department = data;
    });
  }

  public edit() {
    console.log(this.department);

    this.departmentService.edit(this.department).subscribe(
      (data) => {
        this.router.navigate(['/department-list']);
      },
      (error) => {
        console.log(error);
        this.showMsg = true;
        this.msg = 'An error has ocurred in the procedure';
        this.type = 'danger';
      }
    );
  }
}
