import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  addTodo(todo): any{
    return this.http.post<{todo}>('todo/add', todo);
  }
  deleteTodo(id): any{
    return this.http.delete<{todo}>('/todo/delete/' + id);
  }
  updateTodo(id, todo): any{
    return this.http.put<{todo}>('/todo/update/' + id, todo);
  }
  getTodo(): any{
    return this.http.get<{todo}>('/todo/get');
  }
}
