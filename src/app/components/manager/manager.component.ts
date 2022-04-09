import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  displayedColumns: string[] = ['no', 'empId', 'startDate', 'endDate','description','leaveBalance','status'];
  dataSource = [];
  constructor() { }

  ngOnInit(): void {
  }

}
