import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ApplyLeaveComponent } from '../apply-leave/apply-leave.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  panelOpenState = false;

  constructor(private userService:ApiService,private router:Router
    , private dialog: MatDialog) 
  {  
     
   }
    
  ngOnInit(): void {
  }
   
  applyLeave(){
    this.dialog.open(ApplyLeaveComponent);
  }
  
}
