import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  displayedColumns: string[] = ['no', 'empId', 'startDate', 'endDate','description','leaveBalance','status'];
  dataSource = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllLeaves();
  }

  getAllLeaves(){
    this.apiService.getAllLeaves().subscribe(resData=>{
      this.dataSource = resData;
      console.log(this.dataSource);
    })
  }
}
