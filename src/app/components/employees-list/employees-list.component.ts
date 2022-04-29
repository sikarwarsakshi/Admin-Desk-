import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {


  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['empId','name','email','contact','designation','address','action'];
  employeeList!:any;

  constructor(private formbuilder: FormBuilder,
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router) {
    
   }

  ngOnInit(): void {

    this.getAllUser();
  }

    getAllUser(){
      this.apiService.getEmployeeList().subscribe(resData=>{
        this.employeeList = resData;
        this.employeeList = this.apiService.formatList(this.employeeList);
        console.log(resData);
        this.dataSource = new MatTableDataSource<any>(this.employeeList);
        console.log(this.employeeList);
      });
    }

    updateEmployee(empId:string,employee:any){
      this.dialog.open(UpdateEmployeeComponent,{
       
        data: {empId,employee,page: "update"}
      });
     
      // this.apiService.updateEmployee(empId,employee).subscribe(resData=>{
      //     console.log(resData);
      // },
      // errData=>{

      // });
    }
    deleteEmployee(userId: string){
      this.apiService.deleteEmployee(userId).subscribe(resData=>{
        console.log(resData);
        this.ngOnInit();
      });
     
    }
    showDetails(empId:string,employee:any){
      this.dialog.open(EmployeeDetailsComponent,{
        width: '50%',
        data: {empId,employee,page: "details"}
      });

    }
    reloadCurrentPage(){

    }
    addEmployee(){
      this.dialog.open(CreateEmployeeComponent,{
        
      });
      this.dialog.afterAllClosed.subscribe(()=>{this.ngOnInit()});
    }

  panelOpenState: boolean = false;
 togglePanel() {
   this.panelOpenState = !this.panelOpenState;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  
  if(filterValue=="admin" || filterValue=="manager" || filterValue=="employee")
  this.dataSource.filter = filterValue.trim().toLowerCase();
   else
  this.getAllUser();
  
 
}
logout(){
  this.apiService.logout();
  this.router.navigate(["login"]);
}
}
