import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserService {
  private base = "https://localhost:7138/api/Users";

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.base);
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.base}/${id}`);
  }

  add(u: Partial<User>): Observable<User> {
    return this.http.post<User>(this.base, u);
  }

  update(u: User): Observable<User> {
    return this.http.put<User>(`${this.base}/${u.userId}`, u);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
