import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData: any;
  success: any;
  constructor(private auth: AuthService, private router: Router) {
    this.loginUserData = {};
   }

  ngOnInit(): void {
  }
  loginUser(): void{
    this.success = this.auth.loginUser(this.loginUserData);
    if (this.success != null)
    {
      localStorage.setItem('token', this.success);
      this.router.navigate(['/special']);
    }
  }

}
