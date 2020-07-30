import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AuthGuard } from '../services/auth.guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TodogridComponent } from './todogrid/todogrid.component';

const routes: Routes = [
  {
    path: 'mytodos',
    component: TodogridComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'special',
    component: TodoComponent,
    canActivate: [AuthGuard]
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
