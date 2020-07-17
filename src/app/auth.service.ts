import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userList: any;
  constructor(private router: Router) {
    this.userList = [];
   }
  registerUser(user): any{
    const len = this.userList.push(user);
    return this.userList[len - 1];
  }
  loginUser(user): any{
    for (let i = (this.userList.length - 1); i > -1; i--) {
      if (this.userList[i].email === user.email) {
       if (this.userList[i].password === user.password)
       {
         return this.userList[i];
       }
       return null;
      }
      return null;
    }
  }
  loggedIn(): any{
    return !!localStorage.getItem('token');
  }
  logoutUser(): any {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
