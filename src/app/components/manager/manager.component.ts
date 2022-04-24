import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Leave } from 'src/app/model/leave';
import { ApiService } from 'src/app/service/api.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['no', 'empId', 'startDate', 'endDate','description','leaveBalance','status','action'];
  // dataSource: Leave[] = [];
  dataSource !: MatTableDataSource<Leave>;
  constructor(private apiService: ApiService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllLeaves();
  }

  getAllLeaves(){
    this.apiService.getAllLeaves().subscribe(resData=>{
      console.log(resData);
      resData = this.apiService.formatList(resData);
      this.dataSource = new MatTableDataSource(resData);
      this.dataSource.paginator = this.paginator;
    })
  }

  changeLeaveStatus(id: string, status: string){
      this.apiService.changeLeaveStatus(id,status).subscribe(()=>{
        this.ngOnInit();
      });
  }
  employeeDetails(id: string,empId: string){
    this.apiService.getUserByLeave(id,empId).subscribe(resData=>{
      console.log(resData);
    
      this.dialog.open(EmployeeDetailsComponent,{data:{employee: resData[0],page:'leave'},width: '50%'});
    })
  }

}
