import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addTask, deleteTask, ITask, selectAllTasks, TaskState, updateTask } from '@angular-monorepo/shared-task';
import { Store } from '@ngrx/store';
import { TaskFormComponent } from '@angular-monorepo/task-form';

@Component({
  selector: 'lib-task',
  standalone: true,
  imports: [CommonModule, TaskFormComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [];
  selectedTask?: ITask;
  @Input() showForm = false;

  constructor(private store: Store<TaskState>) {}

  ngOnInit(): void {
    this.store.select(selectAllTasks).subscribe(tasks => this.tasks = tasks);
  }

  editTask(task: ITask) {
    this.showForm = true;
    this.selectedTask = task;
    this.store.dispatch(updateTask({ task }));
  }

  addTask() {
    this.store.dispatch(addTask({ task: { id: Date.now(), title: '', description: '' } }));
    this.showForm = true;
  }

  deleteTask(task: ITask) {
    this.store.dispatch(deleteTask({ task }));
  }

  onFormSubmitted() {
    this.showForm = false;
    this.selectedTask = undefined;
  }

}
