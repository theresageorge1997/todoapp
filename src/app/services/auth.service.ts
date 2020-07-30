import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userList: any;
  success: any ;
  constructor(private router: Router, private http: HttpClient) {
    this.userList = [];
   }
  registerUser(user): any{
    const p = new Promise((resolve, reject) => {
      this.http.post<{message: string}>('/todo/register', user)
      .subscribe(response => {
        if (response)
        {
          resolve(response.message);
        }
      });
    });
    return p;
  }
  loginUser(user): any{
    const p = new Promise((resolve, reject) => {
    this.http.post<{message: string}>('/todo/login', user)
    .subscribe(response => {
      if (response)
      {
        resolve(response.message);
      }
    });
  });
    return p;
}
  loggedIn(): any{
    return !!localStorage.getItem('token');
  }
  logoutUser(): any {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
