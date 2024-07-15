import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl = 'http://localhost:8080/api/login';

  constructor( private http: HttpClient, private jwtHelper: JwtHelperService) { }


public login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${this.apiUrl}/login`, user);
  }

public register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return!this.jwtHelper.isTokenExpired(token);
  }
}
