import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OfficeAssignment } from '../domain/office-assignment';

@Injectable({
  providedIn: 'root'
})
export class OfficeAssignmentService {

  public url: string;
  constructor(public httpClient: HttpClient) {
    this.url = environment.apiUrl + 'api/OfficeAssignments/';
   }

   public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  public getById(id: number): Observable<any>{
    return this.httpClient.get(this.url + id)
  }

  public getOfficesByInstructorId(id: number): Observable<any> {  
    return this.httpClient.get(this.url  + id);   
  }

  public save(officeAssignment: OfficeAssignment): Observable<any> {
    return this.httpClient.post(this.url, officeAssignment);
  }

  public edit(officeAssignment: OfficeAssignment): Observable<any>{
    return this.httpClient.put(this.url + officeAssignment.InstructorID, officeAssignment);
  }

  public delete(id: number) {
    return this.httpClient.delete(this.url + id)
  }
}
