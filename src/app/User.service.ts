import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private REST_API_SERVER = 'http://localhost:3000';
  private loggedIn = false;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    const url = `${this.REST_API_SERVER}/users`;
    return this.httpClient.get<User[]>(url).pipe(
      map((userList: User[]) => {
        const user = userList.find((user: User) => {
          return username === user.username && password === user.password;
        });
        if (user) {
          this.loggedIn = true;
          return true;
        } else {
          this.loggedIn = false;
          return false;
        }
      }),
      catchError(() => {
        this.loggedIn = false;
        return of(false);
      })
    );
    
  }

  register(data: User): Observable<User> {
    const url = `${this.REST_API_SERVER}/users`;
    return this.httpClient.post<User>(url, data);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
    this.router.navigateByUrl('/Login');
  }
}
