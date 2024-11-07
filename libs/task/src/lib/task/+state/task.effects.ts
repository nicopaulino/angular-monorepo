import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as TaskActions from './task.actions';
import * as TaskFeature from './task.reducer';

@Injectable()
export class TaskEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.initTask),
      switchMap(() => of(TaskActions.loadTaskSuccess({ task: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(TaskActions.loadTaskFailure({ error }));
      })
    )
  );
}
