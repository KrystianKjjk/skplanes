import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private toast: MatSnackBar,
    private authService: AuthService,
    ) { 

    }

    login()
    {
      this.authService.login(this.credentials)
      .then(user => this.router.navigate(['/dashboard']))
      .catch(error => this.toast.open(error.message));
    }
    register()
    {
      this.authService.register(this.credentials)
      .then(user => this.toast.open("Account created, please log in",'', {panelClass: 'toast-success'}))
      .catch(error => this.toast.open(error.message,'', {panelClass: 'toast-error'}));
    }
}
