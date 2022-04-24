import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username='';
password='';
accessToken='';
role='';
  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.checkUser();
  }

  onSubmit()
  {
      this.apiService.login(this.username,this.password).subscribe(resData=>{
         this.accessToken = resData.accessToken;
         this.role = resData.roles[0];
         let id = resData.id;
        
         this.apiService.getUserData(id).subscribe(userData=>{
          this.apiService.userDetails = userData;
          console.log(userData);
         });
        //  this.apiService.setUserData(resData);
         this.apiService.saveUserDetails(this.role,this.accessToken,resData.id);
        if(this.role === "ROLE_ADMIN"){
          this.router.navigate(['employees-list']);
        }
        else if(this.role === "ROLE_MANAGER")
        {
            this.router.navigate(['manager']);
        }
        else{
          this.router.navigate(["user"]);
        }

      },
      errData=>{
          console.log(errData);
      });
    //console.log("form is submitted");
      // if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password))
      // {
      //   console.log("we have submit the form to server");
      // }
      // else
      // {
      //   console.log("Fields are empty");
      // }

      
  }
  checkUser(){{
    let isLoggedIn = this.apiService.isLoggedIn();
    if(isLoggedIn){
    let role = this.apiService.getRole();
    if(role === "ROLE_ADMIN") this.router.navigate(["employees-list"]);
    else this.router.navigate(["user"]);
    }
  }}

}
