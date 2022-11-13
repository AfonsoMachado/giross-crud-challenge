import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Token } from './token.model';

@Injectable({
  providedIn: 'root',
})
export class AdminLoginService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  login(payload: { email: string; password: string }) {
    return this.http.post<Token>(`${this.baseUrl}/auth`, payload);
  }
}
