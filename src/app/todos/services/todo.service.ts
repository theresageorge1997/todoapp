import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  navigatedList: any;

  constructor(private http: HttpClient) { }
  addList(list): any{
    return this.http.post<{insertedId}>('todo/listadd', list);
  }
  getLists(): any{
    return this.http.get<{lists}>('todo/getlists');
  }


  addTodo(todo): any{
    return this.http.post<{status}>('todo/add/' + this.navigatedList._id, todo);
  }
  deleteTodo(todo): any{
    return this.http.put<{status}>('/todo/delete/' + this.navigatedList._id, todo);
  }
  updateTodo(todo): any{
    return this.http.put<{status}>('/todo/update/' + this.navigatedList._id, todo);
  }
  getTodo(): any{
    return this.http.get<{todo}>('/todo/get/' + this.navigatedList._id);
  }


  set(list): void{
    this.navigatedList = list;
  }
  get(): any{
    return this.navigatedList;
  }

  uploadFile(formData): any{
    const p = new Promise((resolve, reject) => {
      this.http.post<any>('todo/file', formData)
      .subscribe(response => {
        if (response.file)
        {
          resolve(response.file);
        }
      });
    });
    return p;
  }

}
