import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  leaveForm = this.fb.group({
    startDate: [''],
    endDate: [''],
    username: [''],
    discription: ['']
  })
  id="1";
  leaveBalance="12";
  empId="EMP01";
  constructor(private fb: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    var values = this.leaveForm.value;
    // console.log("empId:" + this.empId)
    // console.log(values.startDate)
    // console.log(values.endDate)"leaveBalance" + " "+this.leaveBalance, " Status " +  'Pending'+ "Description" + values.discription)
    this.apiService.applyLeave(this.id, {employeeId: this.empId, startDate: values.startDate,endDate: values.endDate, leaveBalance: this.leaveBalance,status: 'Pending',discription: values.discription}
    ).subscribe(resData=>{
      console.log(resData);
    });
  }

}
