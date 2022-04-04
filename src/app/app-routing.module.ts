import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AuthGuard } from './service/auth.guard';
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
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
