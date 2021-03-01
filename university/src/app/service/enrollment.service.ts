import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enrollment } from '../domain/enrollment';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  public url: string;
  constructor(public httpClient: HttpClient) {
  this.url = environment.apiUrl + 'api/Enrollments/';
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url + id)
  }
  public save(enrollment: Enrollment): Observable<any> {
    return this.httpClient.post(this.url, enrollment);
  }

  public edit(enrollment: Enrollment): Observable<any>{
    return this.httpClient.put(this.url + enrollment.EnrollmentID, enrollment);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.url + id)
  }
}
