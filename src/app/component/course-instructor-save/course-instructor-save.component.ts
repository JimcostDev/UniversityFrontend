import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseInstructor } from 'src/app/domain/course-instructor';
import { CourseInstructorService } from 'src/app/service/course-instructor.service';

@Component({
  selector: 'app-course-instructor-save',
  templateUrl: './course-instructor-save.component.html',
  styleUrls: ['./course-instructor-save.component.css']
})
export class CourseInstructorSaveComponent implements OnInit {

  public courseInstructor!: CourseInstructor;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public courseInstructorService: CourseInstructorService,
    private router: Router) { }

  ngOnInit(): void {
    this.courseInstructor = new CourseInstructor(0, 0, 0);
  }
  public save() {

    console.log(this.courseInstructor);
    
    this.courseInstructorService.save(this.courseInstructor).subscribe(data => {
      this.router.navigate(['/courseInstructor-list']);
    },error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}
