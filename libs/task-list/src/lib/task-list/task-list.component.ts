import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent, TaskModule } from '@angular-monorepo/task';

@Component({
  selector: 'lib-task-list',
  standalone: true,
  imports: [
    CommonModule,
    // TaskComponent
    TaskModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {}
