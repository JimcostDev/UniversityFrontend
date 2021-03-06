import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  public id!: number;
  public student!: Student;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public studentService: StudentService,
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  public getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');    
    this.id = Number(param);

    this.studentService.getById(this.id).subscribe(data => {      
      this.student = data;
    });
  }

  public edit(){
    console.log(this.student);
    
    this.studentService.edit(this.student).subscribe(data => {
      this.router.navigate(['/student-list']);
    },error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}
