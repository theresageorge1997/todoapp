import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {path: '', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule), canActivate: [AuthGuard]},
  {path: '', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)},
  {path: '', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
