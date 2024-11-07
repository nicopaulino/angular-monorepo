import { createAction, props } from '@ngrx/store';
import { TaskEntity } from './task.models';

export const initTask = createAction('[Task Page] Init');

export const loadTaskSuccess = createAction(
  '[Task/API] Load Task Success',
  props<{ task: TaskEntity[] }>()
);

export const loadTaskFailure = createAction(
  '[Task/API] Load Task Failure',
  props<{ error: any }>()
);
