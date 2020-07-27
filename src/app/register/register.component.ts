import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData: any;
  registered: any;

  constructor(private auth: AuthService, private router: Router) {
    this.registerUserData = {
    };
   }

  ngOnInit(): void {
  }
  registerUser(): void {
    this.registered = this.auth.registerUser(this.registerUserData);
    this.registered.then((user) => {
      if (user)
    {
    localStorage.setItem('token', user);
    this.router.navigate(['/special']);
    }
    });
  }

}
