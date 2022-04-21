import { Injectable } from '@angular/core';
import { User } from '../Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API: string = 'https://60f0d74438ecdf0017b0f93d.mockapi.io/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }

  get(userId: User): Observable<User> {
    return this.http.get<User>(`${this.API}/${userId}`);
  }

  AddUser(item: User): Observable<User> {
    return this.http.post<User>(this.API, item);
  }
}
