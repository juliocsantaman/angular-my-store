import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from 'src/app/interfaces/auth.model';
import { Observable, tap} from 'rxjs';
import { User } from 'src/app/interfaces/user.model';
import { TokenService } from '../token-service/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = 'https://young-sands-07814.herokuapp.com/api/auth';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
    ) { }

  // Create the token of user.
  login(email: string, password: string): Observable<Auth> {
    return this.httpClient.post<Auth>(`${this.apiUrl}/login`, {email, password})
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    );
  }

  // profile(token: string): Observable<User> {
  //   // const headers = new HttpHeaders();
  //   // headers.set('Authorization', `Bearer ${token}`);
  //   return this.httpClient.get<User>(`${this.apiUrl}/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       //'Content-type': 'application/json'
  //     }
  //   });
  // }

    profile(): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/profile`);
  }

}
