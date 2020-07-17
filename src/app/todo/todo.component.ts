import { Component, OnInit } from '@angular/core';

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

  constructor() {
  this.newTodo = '';
  this.todos = [];
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
    this.todos.push(this.todoObj);
    this.newTodo = '';
    this.totalItems = this.todos.length;
    event.preventDefault();
  }

  deleteTodo(index): void {
    this.todos.splice(index, 1);
    this.totalItems = this.todos.length;
  }

  counter(): void{
    this.count = 0;
    for (let i = (this.todos.length - 1); i > -1; i--) {
      if (this.todos[i].completed) {
        this.count = this.count + 1;
        this.totalItems = this.todos.length;
      }
    }
  }
  show(): void{
    this.showEdit = true;
  }
  hide(): void{
    this.showEdit = false;
  }
}

