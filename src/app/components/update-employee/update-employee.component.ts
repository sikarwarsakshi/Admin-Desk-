import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/model/employee';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  isDetails: boolean= false;
  empForm = this.formBuilder.group({
    firstName: [this.data.employee.firstname],
    lastName:[this.data.employee.lastname],
     email:[this.data.employee.email],
    contact:[this.data.employee.contact],
    gender:[this.data.employee.gender],
    // status:[''],
    address:[this.data.employee.address],
    city:[this.data.employee.city],
    state:[this.data.employee.state],
    designation:[this.data.employee.designation],
    username:[this.data.employee.username],
    employeeId:[this.data.employee.employeeId],
    dateOfJoining:[this.data.employee.dateOfJoining],
    //bloodGroup:['']
  })
  
  constructor(
    private formBuilder : FormBuilder,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

  }

  ngOnInit(): void {
    if(this.data.page === "details"){
      this.isDetails = true;
    }
    else{
      this.isDetails = false;
    }
  }

  onSubmitEmployeeForm(){
    var values = this.empForm.value;

    var employee: Employee={
      firstname : values.firstName,
      password: this.data.employee.password,
      lastname : values.lastName,
      email: values.email,
      employeeId: values.employeeId,
      designation: values.designation,
      city: values.city,
      state: values.state,
      contact: values.contact,
      dateOfJoining: new Date(),
      gender: values.gender,
      address: values.address,
      username: values.username,
      role: this.data.employee.role
    };
    
    employee.address = values.address;

    this.apiService.updateEmployee(this.data.empId,employee).subscribe(
      resData=>{console.log(resData)}
    );
    
  }

}
