import { DatePipe } from '@angular/common';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css'],
  providers: [DatePipe]
})
export class ApplyLeaveComponent implements OnInit {
  empId="EMP01";

  // isDisabled = false;
  leaveForm = this.fb.group({
    startDate: [''],
    endDate: [''],
    username: [this.empId],
    discription: ['']
  })
  id="1";
  leaveBalance="12";
  emailId!:string;
  data:any;
  
  myDate = new Date();
  constructor(private fb: FormBuilder,
    private apiService: ApiService) { 
     }

  ngOnInit(): void {
    this.setData(); 
  }

  setData(){
    // let data = this.apiService.getUserdata();
    this.id = this.apiService.id;
    this.apiService.getUserData(this.id).subscribe(resData=>{
      console.log(resData);  
      this.data = resData;
      this.leaveBalance = this.data.leaveBalance;
      this.emailId = this.data.email;
    this.empId = this.data.employeeId;
    
    });
    
  }
 convert(str:Date) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  onSubmit(){
    var values = this.leaveForm.value;

    var date1 = new Date(values.startDate); 
    var cuurentDate=this.convert(this.myDate);
    var startingDate=this.convert(date1);
    console.log("start date"+startingDate+"cuuurent date: "+cuurentDate);
    if(startingDate<cuurentDate)
    {Swal.fire({
      icon: 'error',
      title: 'Invalid From Date',
      text: 'Leaves only for future!'
    })}
    else
    {
    var date2 = new Date(values.endDate);
    var dat=this.convert(date2);
    var diffDays =date2.getDate() - date1.getDate(); 
    console.log(diffDays);
    if(diffDays>0)
    {
      this.apiService.applyLeave(this.id, {employeeId: this.empId, startDate: values.startDate,endDate: values.endDate,emailId: this.emailId, leaveBalance: this.leaveBalance,status: 'Pending',discription: values.discription, count: diffDays.toString()}
    ).subscribe(resData=>{
      console.log(resData);
    });

    Swal.fire({
      icon: 'success',
      title: 'Done',
      text: 'Request Sent Successfully'
    })
       
    }else
    { 
      Swal.fire({
        icon: 'error',
        title: 'Invalid Dates',
        text: 'Please enter the right dates!'
      })
    }
  }
     
  }

}
