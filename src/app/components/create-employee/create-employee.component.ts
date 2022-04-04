import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  floatLabelControl = new FormControl('Male');
  empForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService) { 
    this.empForm = this.formBuilder.group({
      firstName: [''],
      lastName:[''],
       email:[''],
      contact:[''],
      gender: this.floatLabelControl,
      password:[''],
      // status:[''],
      address:[''],
      city:[''],
      state:[''],
      designation:[''],
      username:[''],
      employeeId:[''],
      dateOfJoining:[''],
      //bloodGroup:['']
    })
  }
  hide = true;
  ngOnInit(): void {
  }
  onSubmit(){
    var values = this.empForm.value;
    var employee: Employee={
      firstname: values.firstName,
      lastname: values.lastName,
      username: values.username,
      password: values.password,
      email: values.email,
      city: values.city,
      designation: values.designation,
      state: values.state,
      address: values.address,
      gender: values.gender,
      contact: values.contact,
      employeeId: values.employeeId,
      dateOfJoining: values.dateOfJoining,
      role: ['user']
    }

    this.apiService.createEmployee(employee).subscribe(resData=>{
      console.log(resData);
    });
    console.log(this.empForm.value);
  }
} 
