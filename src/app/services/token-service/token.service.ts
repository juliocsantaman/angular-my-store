import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token = new BehaviorSubject<string>('');

  token$ = this.token.asObservable();

  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.token.next(token);
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }

  deleteToken(): void {
    localStorage.removeItem('token');
    this.token.next('');
  }
}
