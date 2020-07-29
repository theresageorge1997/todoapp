import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  newTodo: string;
  todos: any;
  todoObj: any;
  count: number;
  totalItems: number;
  listName: string;
  showEdit: boolean;
  addSuccess: boolean;
  deleteSuccess: boolean;
  updateSuccess: boolean;

  constructor(private todo: TodoService) {
  this.newTodo = '';
  this.todo.getTodo()
  .subscribe(response => {
    this.todos =  response.todo;
  });
  this.count = 0;
  this.totalItems = 0;
  this.listName = 'my todo list';
  this.showEdit = false;
}

  ngOnInit(): void {
  }
  addTodo(event): void {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    };
    this.todo.addTodo(this.todoObj)
    .subscribe(response => {
      this.addSuccess = response.status;
      console.log(this.addSuccess);
    });
    if (this.addSuccess)
    {
    this.todo.getTodo()
    .subscribe(response => {
      this.todos = response.todo;
      console.log(this.todos);
      this.newTodo = '';
      this.totalItems = this.todos.length;
     });
    }
  }

  deleteTodo(id): void {
    this.todo.deleteTodo(id)
    .subscribe(response => {
      this.deleteSuccess = response.status;
      console.log(this.deleteSuccess);
    });
    if (this.deleteSuccess)
    {
    this.todo.getTodo()
    .subscribe(response => {
      this.todos = response.todo;
      this.totalItems = this.todos.length;
      console.log(this.todos);
     });
    }
  }

  counter(todo): void{
    this.count = 0;
    this.todo.updateTodo(todo)
    .subscribe(response => {
      this.updateSuccess = response.status;
      console.log(this.updateSuccess);
    });
    if (this.updateSuccess)
    {
    this.todo.getTodo()
       .subscribe((response) => {
        this.todos = response.todo;
        for (let i = (this.todos.length - 1); i > -1; i--) {
          if (this.todos[i].completed) {
            this.count = this.count + 1;
          }
        }
        console.log(this.todos);
       });
      }
  }
  show(): void{
    this.showEdit = true;
  }
  hide(): void{
    this.showEdit = false;
  }
}


