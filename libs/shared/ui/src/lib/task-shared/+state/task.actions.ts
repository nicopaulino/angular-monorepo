import { createAction, props } from '@ngrx/store';
import { ITask } from '../../../task.model';

export const initTask = createAction('[Task Page] Init');
export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks: ITask[] }>());
export const addTask = createAction('[Task] Add Task', props<{ task: ITask }>());
export const updateTask = createAction('[Task] Update Task', props<{ task: ITask }>());
export const deleteTask = createAction('[Task] Delete Task', props<{ task: ITask }>());
