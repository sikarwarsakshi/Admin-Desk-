import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';


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
    private dialog: MatDialog) {
    
   }

  ngOnInit(): void {

    this.getAllUser();
  }

    getAllUser(){
      this.apiService.getEmployeeList().subscribe(resData=>{
        this.employeeList = resData;
        this.dataSource = new MatTableDataSource<any>(this.employeeList);
        console.log(this.employeeList);
      });
    }

    updateEmployee(empId:string,employee:any){
      this.dialog.open(EmployeeDetailsComponent,{
        width: '60%',
        data: {empId,employee}
      });
     
      // this.apiService.updateEmployee(empId,employee).subscribe(resData=>{
      //     console.log(resData);
      // },
      // errData=>{

      // });
    }
    deleteEmployee(){

    }
    showDetails(){

    }
    reloadCurrentPage(){

    }
    addEmployee(){
      
    }

  panelOpenState: boolean = false;
 togglePanel() {
   this.panelOpenState = !this.panelOpenState;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
