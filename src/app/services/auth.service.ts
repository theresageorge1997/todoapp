import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userList: any;
  success: any ;
  constructor(private router: Router) {
    this.userList = [];
    this.success = null;
   }
  registerUser(user): any{
    const len = this.userList.push(user);
    return this.userList[len - 1];
  }
  loginUser(user): any{
    this.userList.forEach(element => {
      if ((element.email === user.email) && (element.password === user.password))
      {
        this.success = element;
      }
    });
    return this.success;
  }
  loggedIn(): any{
    return !!localStorage.getItem('token');
  }
  logoutUser(): any {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
