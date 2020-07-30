import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todogrid',
  templateUrl: './todogrid.component.html',
  styleUrls: ['./todogrid.component.css']
})
export class TodogridComponent implements OnInit {
show: boolean;
listName: string;
todos = [];
  constructor() {
    this.show = false;
   }

  ngOnInit(): void {
  }
showForm(): void{
this.show = true;
}
add(listName): void{
  this.show = false;
  this.todos.push(listName);
  console.log(this.todos);
}
/* OnImgPicked(event: Event){
  const file = (event.target as HTMLInputElement).files[0];
  this.form.patchValue({image: file});
  this.form.get('image').updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result as string;
  };
  reader.readAsDataURL(file);
} */
/* navigate(todo): void
{

} */
}
