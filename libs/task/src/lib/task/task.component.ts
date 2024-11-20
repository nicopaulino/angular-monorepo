import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask, TaskService } from '@angular-monorepo/shared-task';
import { TaskFormComponent } from '@angular-monorepo/task-form';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'lib-task',
  standalone: true,
  imports: [CommonModule, TaskFormComponent, MatTableModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [];
  selectedTask?: ITask;
  @Input() showForm = false;
  displayedColumns: string[] = ['id', 'title', 'description', 'actions'];


  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    this.taskService.loadTasks();
    }

  editTask(task: ITask) {
    this.showForm = true;
    this.selectedTask = task;
    this.taskService.updateTask(task);
  }

  addTask() {
    this.taskService.addTask({ id: Date.now(), title: '', description: '' });
    this.showForm = true;
  }

  deleteTask(task: ITask) {
    this.taskService.deleteTask(task);
  }

  onFormSubmitted() {
    this.showForm = false;
    this.selectedTask = undefined;
  }

}
