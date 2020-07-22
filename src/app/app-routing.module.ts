import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todos/todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';
import { AboutComponent } from './todos/about/about.component';
import { ContactComponent } from './todos/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'special',
    component: TodoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
