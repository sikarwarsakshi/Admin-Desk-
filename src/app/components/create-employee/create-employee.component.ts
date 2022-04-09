import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      firstName: ['',[Validators.required]],
      lastName:['',[Validators.required]],
       email:['',[Validators.required]],
      contact:['',[Validators.required]],
      gender: this.floatLabelControl,
      password:['',[Validators.required]],
      // status:[''],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      designation:[''],
      username:['', [Validators.required,Validators.minLength(4)]],
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

  get username() { return this.empForm.get('username'); }
  get firstname() { return this.empForm.get('firstname'); }
  get lastname() { return this.empForm.get('lastname'); }
  get email() { return this.empForm.get('email'); }
  get password() { return this.empForm.get('password'); }
  get contact() { return this.empForm.get('contact'); }
  get address() {return this.empForm.get('address');}
  get city() {return this.empForm.get('city');}
  get state() {return this.empForm.get('state');}

} 
