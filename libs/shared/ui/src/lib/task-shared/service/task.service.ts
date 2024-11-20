import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskState } from '../+state/task.reducer';
import { addTask, deleteTask, loadTasks, updateTask } from '../+state/task.actions';
import { ITask } from '../../../task.model';
import { selectAllTasks } from '../+state/task.selectors';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private store: Store<TaskState>) {}

  loadTasks(): void {
    this.store.dispatch(loadTasks());
  }

  getTasks(): Observable<ITask[]> {
    return this.store.select(selectAllTasks);
  }

  addTask(task: ITask): Observable<any> {
   this.store.dispatch(addTask({ task }));
  //  return this.getTasks();
  return of(task).pipe(
    map(() => ({ success: true })),
    catchError(() => of({ success: false }))
  );
  }


  updateTask(task: ITask): void {
    this.store.dispatch(updateTask({ task }));
  }

  deleteTask(task: ITask): void {
    this.store.dispatch(deleteTask({ task }));
  }
}
