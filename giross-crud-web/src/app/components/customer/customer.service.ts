import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  create(product: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl + '/users', product);
  }
}
