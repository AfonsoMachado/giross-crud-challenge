import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css'],
})
export class CustomerDeleteComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  customer: Customer = {
    email: '',
    name: '',
    phone: '',
    sex: '',
  };

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') as string);
    this.customerService.readById(id).subscribe({
      next: (customer) => {
        this.customer = customer;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.customerService.showMessage('Erro');
      },
    });
  }

  deleteCustomer(): void {
    this.customerService.delete(this.customer.id as number).subscribe({
      next: () => {
        this.customerService.showMessage('Cliente excluido com sucesso!');
        this.router.navigate(['/customers']);
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.customerService.showMessage('Erro');
      },
    });
  }

  cancel(): void {
    this.router.navigate(['/customers']);
  }
}
