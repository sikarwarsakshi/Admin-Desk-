import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/model/leave';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  displayedColumns: string[] = ['no', 'empId', 'startDate', 'endDate','description','leaveBalance','status','action'];
  dataSource: Leave[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllLeaves();
  }

  getAllLeaves(){
    this.apiService.getAllLeaves().subscribe(resData=>{
      this.dataSource = resData;
      console.log(resData);
      console.log(this.dataSource);
      this.dataSource = this.apiService.formatList(this.dataSource);
    })
  }

  changeLeaveStatus(id: string, status: string){
      this.apiService.changeLeaveStatus(id,status).subscribe();
  }

}
