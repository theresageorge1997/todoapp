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
  this.todos =  this.todo.get().list;
  this.count = 0;
  this.todos.forEach(element => {
      if (element.completed)
        {
          this.count = this.count + 1;
        }
  });
  this.totalItems = this.todos.length;
  this.listName = this.todo.get().name;
  this.showEdit = false;
}

  ngOnInit(): void {
  }
  addTodo(newTodo): void {
    this.todoObj = {
      newTodo,
      completed: false
    };
    this.todo.addTodo(this.todoObj)
    .subscribe(response => {
      this.addSuccess = response.status;
      console.log(this.addSuccess);
    });

    this.todo.getTodo()
    .subscribe(response => {
      this.todos = response.todo;
      console.log(this.todos);
      this.newTodo = '';
      this.totalItems = this.todos.length;
     });
  }

  deleteTodo(todo): void {
    this.todo.deleteTodo(todo)
    .subscribe(response => {
      this.deleteSuccess = response.status;
      console.log(this.deleteSuccess);
    });
    this.todo.getTodo()
    .subscribe(response => {
      this.todos = response.todo;
      this.totalItems = this.todos.length;
      console.log(this.todos);
     });
  }

  counter(todo, index): void{
    this.todo.updateTodo(todo)
    .subscribe(response => {
      this.updateSuccess = response.status;
      console.log(this.updateSuccess);
    });
    this.todo.getTodo()
       .subscribe((response) => {
        this.todos = response.todo;
        this.count = 0;
        this.todos.forEach(element => {
          if (element.completed)
            {
              this.count = this.count + 1;
            }
      });
        console.log(this.todos);
       });
  }
  show(): void{
    this.showEdit = true;
  }
  hide(): void{
    this.showEdit = false;
  }
}


