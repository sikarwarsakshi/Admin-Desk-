import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AuthGuard } from './service/auth.guard';
import { ManagerComponent } from './components/manager/manager.component';
import { UserComponent } from './components/user/user.component';
// import { LeaveComponent } from './components/users/users.component';
const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
    canActivate: [AuthGuard]
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"employees-list",
    component:EmployeesListComponent,
    pathMatch:"full",
    canActivate: [AuthGuard]
  },
  {
    path:"manager",
    component:ManagerComponent,
    pathMatch:"full",
    canActivate: [AuthGuard]
  },
  {
    path:"user",
    component:UserComponent,
    pathMatch:"full",
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
