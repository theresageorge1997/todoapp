import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: any;
  success: any;
  msg: any;
  constructor(private auth: AuthService, private router: Router) {
    this.loginUserData = {};
   }

  ngOnInit(): void {
  }
  loginUser(): void{
    this.success = this.auth.loginUser(this.loginUserData);
    this.success.then((user) => {
    this.msg = user.message;
    if (user)
    {
      localStorage.setItem('token', user);
      this.router.navigate(['/special']);
    }
  });
  }

}
