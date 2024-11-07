import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TaskActions from './task.actions';
import { TaskEntity } from './task.models';

export const TASK_FEATURE_KEY = 'task';

export interface TaskState extends EntityState<TaskEntity> {
  selectedId?: string | number; // which Task record has been selected
  loaded: boolean; // has the Task list been loaded
  error?: string | null; // last known error (if any)
  title: string;
  description: string;
}

export interface TaskPartialState {
  readonly [TASK_FEATURE_KEY]: TaskState;
}

export const taskAdapter: EntityAdapter<TaskEntity> =
  createEntityAdapter<TaskEntity>();

export const initialTaskState: TaskState = taskAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  title: 'Swaggggg Title',
  description: 'Swag',
});

const reducer = createReducer(
  initialTaskState,
  on(TaskActions.initTask, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TaskActions.loadTaskSuccess, (state, { task }) =>
    taskAdapter.setAll(task, { ...state, loaded: true })
  ),
  on(TaskActions.loadTaskFailure, (state, { error }) => ({ ...state, error }))
);

export function taskReducer(state: TaskState | undefined, action: Action) {
  return reducer(state, action);
}
