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
  role!:string;
  accessToken!:string;
  isAuthenticated:boolean =false;
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

  deleteEmployee(userId:string){
    return this.http.post<any>(`${this.apiBaseUrl}/api/auth/delete-user/${userId}`,userId);
  }

  createEmployee(employee: Employee){
    return this.http.post<Employee>(`${this.apiBaseUrl}/api/auth/signup`,employee);
  }

  login(username: string, password: string){
    return this.http.post<any>(`${this.apiBaseUrl}/api/auth/signin`,{username,password});
  }

  getRole(){
    return this.role;
  }
  setRole(role: string){
    this.role = role;
  }

  getAccessToken(){
    return this.accessToken;
  }

  setAccessToken(accessToken: string){
    this.accessToken = accessToken;
  }
  
  saveUserDetails(role:string,accessToken: string){
    this.accessToken = accessToken;
    this.role = role;
    if(this.accessToken!== undefined && this.role !== undefined){
      this.isAuthenticated = true;
    }
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('role',role);
  }
  isLoggedIn(){
		if(localStorage.getItem('accessToken')!==undefined) return true;
		else return false;
	}

  logout(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('role');
    this.isAuthenticated = false;
  }

  getAllLeaves(){
    return this.http.get<any>(`${this.apiBaseUrl}/api/auth/show-leaves`);
  }
}
