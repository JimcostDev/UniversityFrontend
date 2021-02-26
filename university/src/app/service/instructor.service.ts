import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  public url: string;
  constructor(public httpClient: HttpClient) {
    this.url = environment.apiUrl + 'api/Instructors/';
   }

   public getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
