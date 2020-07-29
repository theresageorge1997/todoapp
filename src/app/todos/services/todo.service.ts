import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  addTodo(todo): any{
    return this.http.post<{status}>('todo/add', todo);
  }
  deleteTodo(id): any{
    return this.http.delete<{status}>('/todo/delete/' + id);
  }
  updateTodo(todo): any{
    return this.http.put<{status}>('/todo/update', todo);
  }
  getTodo(): any{
    return this.http.get<{todo}>('/todo/get');
  }
}
