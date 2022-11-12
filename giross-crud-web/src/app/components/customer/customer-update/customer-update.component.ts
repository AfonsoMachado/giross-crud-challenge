import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css'],
})
export class CustomerUpdateComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  customer: Customer = {
    name: '',
    email: '',
    phone: '',
    sex: '',
  };

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.customerService.readById(id).subscribe({
      next: (customer) => {
        this.customer = customer;
      },
      error: (error) => console.error(error),
    });
  }

  updateCustomer(): void {
    this.customerService.update(this.customer).subscribe({
      next: () => {
        this.customerService.showMessage('Cliente atualizado com sucesso');
        this.router.navigate(['/customers']);
      },
      error: (error) => console.error(error),
    });
  }

  cancel(): void {
    this.router.navigate(['/customers']);
  }
}
