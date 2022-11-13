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
  accessToken = this.getToken();

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  getHeaders(): any {
    const headers: any = {
      'Content-type': 'application/json',
    };
    headers.Authorization = `Bearer ${this.accessToken}`;
    return headers;
  }

  getToken(): string {
    const tokenPayload = localStorage.getItem('USER_TOKEN');
    if (!tokenPayload) return '';
    return JSON.parse(tokenPayload).access_token;
  }

  create(customer: Customer): Observable<Customer> {
    const url = `${this.baseUrl}/users`;
    return this.http.post<Customer>(url, customer);
  }

  read(): Observable<Customer[]> {
    const url = `${this.baseUrl}/users`;
    const headers = this.getHeaders();
    return this.http.get<Customer[]>(url, { headers });
  }

  readById(id: number): Observable<Customer> {
    const url = `${this.baseUrl}/users/${id}`;
    const headers = this.getHeaders();
    return this.http.get<Customer>(url, { headers });
  }

  update(customer: Customer): Observable<Customer> {
    const url = `${this.baseUrl}/users/${customer.id}`;
    const headers = this.getHeaders();
    return this.http.patch<Customer>(url, customer, { headers });
  }

  delete(id: number): Observable<Customer> {
    const url = `${this.baseUrl}/users/${id}`;
    const headers = this.getHeaders();
    return this.http.delete<Customer>(url, { headers });
  }
}
