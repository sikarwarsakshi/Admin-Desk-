import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
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
  constructor(private fb: FormBuilder,
    private apiService: ApiService) { }

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
  onSubmit(){
    var values = this.leaveForm.value;
    // console.log("empId:" + this.empId)
    // console.log(values.startDate)
    // console.log(values.endDate)"leaveBalance" + " "+this.leaveBalance, " Status " +  'Pending'+ "Description" + values.discription)
    let startDate =  new Date(values.startDate);
    let endDate = new Date(values.endDate);
    // let startMonth =  new Date(values.startDate).getMonth();
    // let endMonth = new Date(values.endDate).getMonth();
    let diff = Math.floor((endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24) + 1;
    //
    // let startDate =  new Date(values.startDate).toLocaleDateString();
    this.apiService.applyLeave(this.id, {employeeId: this.empId, startDate: values.startDate,endDate: values.endDate,emailId: this.emailId, leaveBalance: this.leaveBalance,status: 'Pending',discription: values.discription, count: diff.toString()}
    ).subscribe(resData=>{
      console.log(resData);
    });
  }

}
