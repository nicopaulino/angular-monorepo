import { ActionReducerMap } from '@ngrx/store';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { TASK_FEATURE_KEY, taskReducer, TaskState } from '@angular-monorepo/task';

export interface AppState {
  [TASK_FEATURE_KEY]: TaskState;
}

export const reducers: ActionReducerMap<AppState> = {
  [TASK_FEATURE_KEY]: taskReducer,
};
