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

  displayedColumns = ['name', 'email', 'phone', 'sex', 'action'];

  ngOnInit(): void {
    this.customersService.read().subscribe((customers) => {
      this.customers = customers;
    });
  }
}
