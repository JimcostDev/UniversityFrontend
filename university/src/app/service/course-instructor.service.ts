import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseInstructorService {
  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.apiUrl + 'api/CourseInstructors/';
  }
  public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + id);
  }
}
