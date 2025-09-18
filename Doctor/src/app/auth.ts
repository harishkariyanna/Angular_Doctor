import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base = "https://localhost:7138/api";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<{
    token: string; username: string; role: string | { roleName: string };
  }> {
    return this.http
      .post<{ token: string; username: string; role: string | { roleName: string } }>(`${this.base}/Token/login`, {
        userName: username,
        password
      })
      .pipe(
        tap((resp) => {
          if (resp?.token) {
            const resolvedRole = typeof resp.role === 'string' ? resp.role : resp.role.roleName;
            localStorage.setItem('jwt_token', resp.token);
            localStorage.setItem('current_user', JSON.stringify({
              userName: resp.username,
              role: { roleName: resolvedRole }
            }));
          }
        })
      );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/Token/register`, user);
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('current_user');
  }

  getToken(): string | null {
    return localStorage.getItem('jwt_token');
  }

  getCurrentUser(): User | null {
    const v = localStorage.getItem('current_user');
    return v ? JSON.parse(v) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getCurrentUserRole(): string | null {
    const user = this.getCurrentUser();
    return user?.role?.roleName ?? null;
  }

  isAdmin(): boolean {
    return this.getCurrentUserRole() === 'Admin';
  }

  isPatient(): boolean {
    return this.getCurrentUserRole() === 'Patient';
  }

  isUser(): boolean {
    return this.getCurrentUserRole() === 'User';
  }
}
