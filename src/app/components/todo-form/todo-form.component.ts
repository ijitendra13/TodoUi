import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../interface/Task';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {

  todoForm!: FormGroup;
  tasks: Task[] = [];
 // todoL=inject(TodoListComponent);
  taskService = inject(TaskService);

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  onSubmit() {
    const title = this.todoForm.value.title;

    this.taskService.addData(title).subscribe(()=>{
        this.taskService.getData().subscribe((x)=>{
      //  this.todoL.tasks$=x;
      })
    });

    console.log("task saved", title);
  }

}
