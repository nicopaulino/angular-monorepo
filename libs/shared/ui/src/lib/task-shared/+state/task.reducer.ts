import { createReducer, on } from '@ngrx/store';
import { loadTasksSuccess, addTask, updateTask, deleteTask } from './task.actions';
import { ITask } from '../../../task.model';

export interface TaskState {
  tasks: ITask[];
}

const initialState: TaskState = {
  tasks: [{
          id: 1,
          title: 'Get groceries',
          description: 'I need to go to Ralphs and get some groceries.',
        },
        {
          id: 2,
          title: 'Record Mixtape',
          description: 'The people are waiting for some new Lil Pancake. Give the people what they want.',
        },
        {
          id: 3,
          title: 'Take a nap',
          description: 'You deserve it.',
        }]
};

export const taskReducer = createReducer(
  initialState,
  on(loadTasksSuccess, (state, { tasks }) => ({ ...state, tasks })),
  on(addTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
  on(updateTask, (state, { task }) => (
    console.log('updateTask hit'),{
    ...state,
    tasks: state.tasks.map(t => (t.id === task.id ? task : t))
  })),
  on(deleteTask, (state, { task }) => ({ ...state, tasks: state.tasks.filter(t => t.id !== task.id) }))
);
