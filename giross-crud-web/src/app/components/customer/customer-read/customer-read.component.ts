import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css'],
})
export class CustomerReadComponent implements OnInit {
  constructor(private customersService: CustomerService) {}

  customers: Customer[] = [];

  displayedColumns = ['name', 'email', 'phone', 'sex', 'createdAt', 'action'];

  ngOnInit(): void {
    this.customersService.read().subscribe({
      next: (customers) => {
        this.customers = customers;
      },
      error: (error: HttpErrorResponse) => {
        if (error.error.statusCode === 400) {
          this.customersService.showMessage(error.error.message);
        } else {
          this.customersService.showMessage('Erro');
        }
      },
    });
  }

  getFormattedDate(strDate: string, separator = '/'): string {
    const date = new Date(strDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return day + separator + month + separator + year;
  }
}
