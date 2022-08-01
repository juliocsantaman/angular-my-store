import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, CreateUserDTO } from 'src/app/interfaces/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl: string = 'https://young-sands-07814.herokuapp.com/api/users';

  constructor(private httpClient: HttpClient) { }

  create(dto: CreateUserDTO): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}`, dto);
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}`);
  }
}
