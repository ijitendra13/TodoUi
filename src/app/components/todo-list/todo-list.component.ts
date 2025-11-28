import { Component, inject, Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Task } from '../../interface/Task';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {

  tasks: Task[] = [];
 taskService = inject(TaskService);
  // constructor(protected taskService: TaskService) {}


  // ngOnInit(): void {
  //   this.taskService.getData().subscribe((x) => {
  //     console.log("datahttp", x);
  //     this.tasks = x;
  //   });
  // }
  tasks$=this.taskService.getData();

  onDelete(id: any) {
    this.taskService.deleteData(id).subscribe(
      (res: any) => console.log('Deleted:', res, id),
      (err: any) => console.error(err)
    );

    this.taskService.getData().subscribe((x) => {
      console.log("after delete", x);
    });
  }

  onToggle(id: any) {
    console.log('toggle', id);
  }
}
