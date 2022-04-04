import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'loginapp';
 

  ngOnInit(): void {
    
  }

  // checkUser(){
  //   let accessToken = localStorage.getItem('accessToken');
  //   let role = localStorage.getItem('role'); 
  // let accessToken = localStorage.getItem('accessToken');
  // }
}
