import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todogrid',
  templateUrl: './todogrid.component.html',
  styleUrls: ['./todogrid.component.css']
})
export class TodogridComponent implements OnInit {
show: boolean;
listName: string;
listObj: any;
lists: any;
imageName: any;
images;
  constructor(private todo: TodoService,  private router: Router, private http: HttpClient) {
    this.show = false;
    this.todo.getLists()
    .subscribe(response => {
      this.lists =  response.lists;
    });
   }

  ngOnInit(): void {
  }
showForm(): void{
this.show = true;
}

createNewList(listName): void{
  const formData = new FormData();
  formData.append('file', this.images);
  this.todo.uploadFile(formData).then((file) => {
    this.show = false;
    this.listObj = {
    name: this.listName,
    image: 'assets/images/' + file,
    list: []
  };

    this.todo.addList(this.listObj)
  .subscribe(response => {
    console.log(response.insertedId);
  });
    this.todo.getLists()
  .subscribe(response => {
    this.lists = response.lists;
    console.log(this.lists);
   });
  });
}
 navigate(list): void{
   this.todo.set(list);
   this.router.navigate(['/special']);
 }

 selectImage(event): void {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.images = file;
  }
}
}
