import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/model/employee';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  employee!: any;
  dateOfJoining!:string;
  ngOnInit(): void {
    this.employee=this.data.employee; 
    this.dateOfJoining = new Date(this.employee.dateOfJoining).toLocaleDateString();
    console.log(this.employee);
  }

 }

