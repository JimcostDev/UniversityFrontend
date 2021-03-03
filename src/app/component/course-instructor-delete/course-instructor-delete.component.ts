import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseInstructor } from 'src/app/domain/course-instructor';
import { CourseInstructorService } from 'src/app/service/course-instructor.service';

@Component({
  selector: 'app-course-instructor-delete',
  templateUrl: './course-instructor-delete.component.html',
  styleUrls: ['./course-instructor-delete.component.css']
})
export class CourseInstructorDeleteComponent implements OnInit {

  public id!: number;
  public courseInstructor!: CourseInstructor;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public courseInstructorService: CourseInstructorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.getById();
    }
  
    public getById(){
      let param = this.activatedRoute.snapshot.paramMap.get('id');    
      this.id = Number(param);
  
      this.courseInstructorService.getById(this.id).subscribe(data => {      
        this.courseInstructor = data;
      });
    }
  
    public delete(){
      this.courseInstructorService.delete(this.courseInstructor.ID).subscribe(data => {
        this.router.navigate(['/courseInstructor-list']);
      },error => {
        console.log(error);
        this.showMsg = true;
        this.msg = 'An error has ocurred in the procedure';
        this.type = 'danger';
      });
    }

}
