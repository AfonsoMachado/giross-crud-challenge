import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    const tokenPayload = localStorage.getItem('USER_TOKEN');

    if (!tokenPayload) return false;

    const token = JSON.parse(tokenPayload).access_token;

    const partsOfToken = token.split('.');

    if (partsOfToken.length < 2) return false;

    const tokenDecoded = JSON.parse(atob(partsOfToken[1]));

    return tokenDecoded.exp > Date.now() / 1000;
  }

  logout(): void {
    localStorage.removeItem('USER_TOKEN');
    this.router.navigate(['/login']);
  }
}
