import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Leave } from 'src/app/model/leave';
import { ApiService } from 'src/app/service/api.service';
import { ApplyLeaveComponent } from '../apply-leave/apply-leave.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , AfterViewInit{
  dataSource!: MatTableDataSource<Leave[]>;
  panelOpenState = false;
  leaveBalance!: string;

  displayedColumns: string[] = ['startDate', 'endDate', 'status','description'];
  constructor(private apiService:ApiService,private router:Router
    , private dialog: MatDialog) 
  {  }
  ngAfterViewInit(): void {
 
  }
    
  ngOnInit(): void {
  
  this.apiService.getUserData(this.apiService.id).subscribe(resData=>{
    this.leaveBalance = resData.leaveBalance;
  });
  this.getLeaves();   
  }

  getLeaves(){
    this.apiService.getUserLeave(this.apiService.id).subscribe(resData=>{
      resData = this.apiService.formatList(resData);
      this.dataSource = new MatTableDataSource(resData);
     
    })
  }
  applyLeave(){
    this.dialog.open(ApplyLeaveComponent);
    this.dialog.afterAllClosed.subscribe(()=>{
      this.ngOnInit();
    });
    // this.leaveBalance = this.apiService.userDetails.leaveBalance;
  
  }
  
}
