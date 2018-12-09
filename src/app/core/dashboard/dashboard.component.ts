import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
user = this.authService.user;
constructor(
  private router: Router,
  private authService: AuthService)
{
  
}

logout()
{
  this.authService.loguot().then(()=>this.router.navigate(["/login"]));
}

}
