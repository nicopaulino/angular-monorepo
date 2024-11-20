// import { Injectable } from '@angular/core';
// import { Actions, ofType, createEffect } from '@ngrx/effects';
// import { loadTasks, loadTasksSuccess, addTask } from './task.actions';
// import { map, mergeMap, catchError } from 'rxjs/operators';
// import { of } from 'rxjs';
// import { TaskService } from '../service/task.service';

// @Injectable()
// export class TaskEffects {
//   constructor(private actions$: Actions, private taskService: TaskService) {}

//   // Effect for loading tasks
//   loadTasks$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(loadTasks),
//       mergeMap(() =>
//         this.taskService.getTasks().pipe(
//           map((tasks) => loadTasksSuccess({ tasks })),
//           catchError(() => of({ type: '[Task] Load Tasks Failure' }))
//         )
//       )
//     )
//   );

//   // Effect for adding a task
//   addTask$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(addTask),
//       mergeMap((action) =>
//         this.taskService.addTask(action.task).pipe(
//           map(() => ({ type: '[Task] Add Task Success' })),
//           catchError(() => of({ type: '[Task] Add Task Failure' }))
//         )
//       )
//     )
//   );
// }

import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { loadTasks, loadTasksSuccess, addTask } from './task.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TaskService } from '../service/task.service';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  // Effect for loading tasks
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTasks),
      mergeMap(() =>
        this.taskService.getTasks().pipe(
          map((tasks) => loadTasksSuccess({ tasks })),
          catchError(() => of({ type: '[Task] Load Tasks Failure' }))
        )
      )
    )
  );

  // Effect for adding a task
  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTask),
      mergeMap((action) =>
        this.taskService.addTask(action.task).pipe(
          map(() => ({ type: '[Task] Add Task Success' })),
          catchError(() => of({ type: '[Task] Add Task Failure' }))
        )
      )
    )
  );
}
