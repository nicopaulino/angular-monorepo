import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITask } from './task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasks: ITask[] = [    {
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
    }
  ];

  private tasksSubject = new BehaviorSubject<ITask[]>(this.tasks);

  getTasks(): Observable<ITask[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(newTask: ITask): void {
    const currentTasks = this.tasksSubject.value;
    this.tasksSubject.next([...currentTasks, newTask]);
  }

  updateTask(updatedTask: ITask): void {
    const tasks = this.tasksSubject.value.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasksSubject.next(tasks);
  }

  deleteTask(deletedTask: ITask): void {
    this.tasks = this.tasks.filter(task => task.id !== deletedTask.id);
    this.tasksSubject.next(this.tasks);
  }
}
