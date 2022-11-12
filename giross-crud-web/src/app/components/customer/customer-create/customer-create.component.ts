import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer = {
    name: '',
    email: '',
    phone: '',
    sex: '',
  };

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {}

  handler(customer: Customer) {
    this.customer = customer;
  }

  createCustomer(): void {
    console.log(this.customer);
    this.customerService.create(this.customer).subscribe({
      next: () => {
        this.customerService.showMessage('Cliente criado!');
        this.router.navigate(['/customers']);
      },
      error: (error: HttpErrorResponse) => {
        this.customerService.showMessage(
          'Preencha todos os campos corretamente!'
        );
      },
    });
  }

  cancel(): void {
    this.router.navigate(['/customers']);
  }
}
