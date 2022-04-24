import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import {MatIconModule} from '@angular/material/icon'; 
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ManagerComponent } from './components/manager/manager.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { LeaveComponent } from './components/leave/leave.component';
import { UserComponent } from './components/user/user.component';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { UsersComponent } from './users/users.component';
// import { MatInputModule } from '@angular/material/input';
// @NgModule({
//   declarations:,
//   imports:,
//   exports:
// })
// class AppModule{}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
    ManagerComponent,
    ApplyLeaveComponent,
    UserComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, MatMenuModule,MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
