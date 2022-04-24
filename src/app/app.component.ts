import { Component, OnInit } from "@angular/core";
import { ApiService } from "./service/api.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'loginapp';
 
  constructor(private apiService: ApiService){}
  ngOnInit(): void {
    this.checkUser();
  }

  checkUser(){
    let role = localStorage.getItem('role'); 
   let accessToken = localStorage.getItem('accessToken');
   let id = localStorage.getItem('id');
    if(role!==null && accessToken!==null && id!==null){
      this.apiService.saveUserDetails(role,accessToken,id);
      // this.apiService.setAccessToken(role);
    }
  }
}
