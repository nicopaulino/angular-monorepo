import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask, TaskService } from '@angular-monorepo/shared-task';
import { TaskFormComponent } from '@angular-monorepo/task-form';

@Component({
  selector: 'lib-task',
  // standalone: true,
  // imports: [CommonModule, TaskFormComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [];
  selectedTask?: ITask;
  @Input() showForm = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  editTask(task: ITask) {
    this.selectedTask = task;
    this.showForm = true;
    console.log('Editing task:', task);
  }

  addTask() {
    this.selectedTask = undefined;
    this.showForm = true;
  }

  // onFormSubmitted() {
  //   this.showForm = false;
  //   this.selectedTask = undefined; nx generate @nx/angular:ngrx task --module=libs/task/src/lib/task.module.ts --root --minimal=false
  // libs/task/src/lib/task/task.component.ts.
  // }

  deleteTask(task: ITask) {
    this.taskService.deleteTask(task);
  }
}
