import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8585';

  constructor(private http: HttpClient) {}

  generateToken(credentials: any) {
    localStorage.setItem('username', credentials.username);
    return this.http.post(`${this.apiUrl}/token`, credentials);
  }

  register(credentials: any) {
    return this.http.post(`${this.apiUrl}/register`, credentials);
  }

  loginUser(token) {
    localStorage.setItem('token', token);
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token === '' || token === null || token === undefined) {
      return false;
    } else {
      return true;
    }
  }

  logoutUser() {
    localStorage.removeItem('token');
    return true;
  }
}
