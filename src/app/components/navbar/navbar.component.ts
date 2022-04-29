import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  disable=false;
  constructor(private apiService: ApiService,
    private router: Router) { }
  isAuthenticated =false;
  ngOnInit(): void {
    this.isAuthenticated = this.apiService.isAuthenticated;
    
  }
isEnabled()
{
  this.disable=true;
}
  logout(){
    this.apiService.logout();
    this.router.navigate(["login"]);
  }
}
