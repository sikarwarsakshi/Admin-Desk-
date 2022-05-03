import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { ApiService } from 'src/app/service/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  floatLabelControl = new FormControl('Male');
  empForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private apiService: ApiService) { 
    this.empForm = this.formBuilder.group({
      firstName: ['',[Validators.required,Validators.pattern('^[a-zA-Z_ ]*$')]],
      // username: ['',[Validators.required]],
      lastName:['',[Validators.required,Validators.pattern('^[a-zA-Z_ ]*$')]],
       email:['',[Validators.required, Validators.email]],
      contact:['',[Validators.required,Validators.minLength(10),Validators.pattern("^[6-9]{1}[0-9]{9}$"),Validators.maxLength(10)]],
      gender: this.floatLabelControl,
      password:['',[Validators.required,Validators.minLength(8)]],
      // status:[''],
      address:['',[Validators.required]],
      city:['',[Validators.required,Validators.maxLength(15)]],
      state:['',[Validators.required]],
      designation:['',[Validators.required]],
      username:['', [Validators.required,Validators.minLength(4)]],
      //employeeId:['',[Validators.required]],
      dateOfJoining:['',[Validators.required]],
      //bloodGroup:['']
    })
  }
  hide = true;
  ngOnInit(): void {
  }
  onSubmit(){
    // console.log("user role is"+values.role);
    console.log("formgroup : ",this.empForm)
    console.log("formgroup status: ",this.empForm.status);
    if(this.empForm.invalid) {
      console.log('Please Fill all the details');
      return;
    }
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
      leaveBalance: "12",
      role: [values.designation]
    }


    this.apiService.createEmployee(employee).subscribe(resData=>{
    //  this.snackBar.open('User Registered Successfully');
      Swal.fire({
        icon: 'success',
        title: 'Done',
        text:"Registration Successfully"
        
      })

      // this.snackBar.openFromComponent('Created ', {
      //   duration: this.durationInSeconds * 1000,
      // });
      console.log(employee);
      console.log(resData);
    },
    errData=>{
      let reason = errData.error.message;
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: reason
      })
      console.log(reason);
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

  get designation() {return this.empForm.get('designation');}
} 
