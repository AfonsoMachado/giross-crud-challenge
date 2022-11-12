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

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/users`, customer);
  }

  read(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/users`);
  }

  readById(id: number): Observable<Customer> {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.get<Customer>(url);
  }

  update(customer: Customer): Observable<Customer> {
    const url = `${this.baseUrl}/users/${customer.id}`;
    return this.http.patch<Customer>(url, customer);
  }

  delete(id: number): Observable<Customer> {
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.delete<Customer>(url);
  }
}
