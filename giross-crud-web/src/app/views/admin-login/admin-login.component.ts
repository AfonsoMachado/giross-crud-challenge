import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { AdminLoginService } from './admin-login.service';
import { Token } from './token.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(
    private adminLoginService: AdminLoginService,
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Login',
      icon: 'check',
      routeUrl: '/login',
    };
  }

  email = '';
  password = '';

  ngOnInit(): void {}

  login() {
    this.adminLoginService
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (token: Token) => {
          localStorage.setItem('USER_TOKEN', JSON.stringify(token));
          this.router.navigate(['/']);
        },
        error: (error: HttpErrorResponse) => {
          if (error.error.statusCode === 400) {
            this.adminLoginService.showMessage(
              'Preencha os dados corretamente'
            );
          } else {
            this.adminLoginService.showMessage(error.error.message);
          }
        },
      });
  }
}
