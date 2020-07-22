import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [TodoComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class TodosModule { }
