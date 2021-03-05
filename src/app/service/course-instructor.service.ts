import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseInstructor } from '../domain/course-instructor';

@Injectable({
  providedIn: 'root',
})
export class CourseInstructorService {
  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.apiUrl + 'api/CourseInstructors/';
    //this.url = 'https://university-api.azurewebsites.net/api/CourseInstructors/';
  }
  public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  public save(courseInstructor: CourseInstructor): Observable<any> {
    return this.httpClient.post(this.url, courseInstructor);
  }

  public edit(courseInstructor: CourseInstructor): Observable<any> {
    return this.httpClient.put(
      this.url + courseInstructor.ID,
      courseInstructor
    );
  }
  public delete(id: number) {
    return this.httpClient.delete(this.url + id);
  }
}
