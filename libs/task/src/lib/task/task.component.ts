import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask } from '@angular-monorepo/shared-task';
import { Store } from '@ngrx/store';
import { selectAllTasks } from './+state/task.selectors';
import { TaskState } from './+state/task.reducer';
import { addTask, deleteTask } from './+state/task.actions';
// import { TaskFormComponent } from '@angular-monorepo/task-form';

@Component({
  selector: 'lib-task',
  standalone: true,
  imports: [CommonModule],
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
    console.log('editTask', task);
    console.log('showForm', this.showForm);
    // this.selectedTask = task;
    // this.store.dispatch(updateTask({ task }));
    // console.log('editTask', task);
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
