import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiBaseUrl= environment.apiURL;
  constructor(private http : HttpClient) { }

  postEmploye(data : any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data);
  }

  getEmployeeList(){
    return this.http.get<any>(`${this.apiBaseUrl}/api/auth/showusers`);
  }

  updateEmployee(userId: string,employee:Employee){
    
    return this.http.post<any>(`${this.apiBaseUrl}/api/auth/update-user/${userId}`,employee);
  }
}
