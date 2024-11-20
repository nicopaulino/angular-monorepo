
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ITask } from './task.model';
import { TaskState } from './lib/task-shared/+state/task.reducer';
import { selectAllTasks } from './lib/task-shared/+state/task.selectors';
import { addTask, deleteTask, loadTasks, updateTask } from './lib/task-shared/+state/task.actions';


@Injectable({
  providedIn: 'root',
})
// export class TaskService {
//   constructor(private store: Store<TaskState>) {}

//   getTasks(): Observable<ITask[]> {
//     return this.store.select(selectAllTasks);
//   }

//   loadTasks(): void {
//     this.store.dispatch(loadTasks());
//   }

//   addTask(task: ITask): void {
//     this.store.dispatch(addTask({ task }));
//   }

//   updateTask(task: ITask): void {
//     this.store.dispatch(updateTask({ task }));
//   }

//   deleteTask(task: ITask): void {
//     this.store.dispatch(deleteTask({ task }));
//   }
// }

export class TaskService {
  constructor(private store: Store<TaskState>) {}

  loadTasks(): void {
    this.store.dispatch(loadTasks());
  }

  getTasks(): Observable<ITask[]> {
    return this.store.select(selectAllTasks);
  }

  addTask(task: ITask): Observable<void> {
    this.store.dispatch(addTask({ task }));
    return of();
  }

  updateTask(task: ITask): Observable<void> {
    this.store.dispatch(updateTask({ task }));
    return of();
  }

  deleteTask(task: ITask): Observable<void> {
    this.store.dispatch(deleteTask({ task }));
    return of();
  }
}
