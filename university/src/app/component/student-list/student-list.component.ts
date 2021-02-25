import { Component, OnInit, OnDestroy} from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/domain/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students: Student[] = [];
  public subStudents: Subscription = new Subscription;

  constructor(public StudentService: StudentService) { }

  ngOnDestroy(): void {
    this.subStudents.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.subStudents = this.StudentService.getAll().subscribe(data => {
      this.students = data;
    });
  }

}
