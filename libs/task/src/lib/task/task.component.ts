import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask } from './task.model';

@Component({
  selector: 'lib-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  tasks: ITask[] = [];
  selectedTask?: ITask;
  // @Input() showForm = false;


  // constructor(private taskService: TaskService) {}

  ngOnInit() {
    // this.taskService.getTasks().subscribe(tasks => {
    //   this.tasks = tasks;
    // });
    this.tasks = [
      { id: 1, title: 'Task 1', description: 'Task 1 Description' },
      { id: 2, title: 'Task 2', description: 'Task 2 Description' },
    ];
  }

  editTask(task: ITask) {
    this.selectedTask = task;
    // this.showForm = !this.showForm;
    console.log('Editing task:', task);
  }

  addTask() {
    // const newTask: ITask = { id: 3, title: 'New Task', description: 'New Task Description' };
    // this.taskService.addTask(newTask);
  }

  updateTask() {
    // const updatedTask: ITask = { id: 1, title: 'Updated Task', description: 'Updated Description' };
    // this.taskService.updateTask(updatedTask);
  }
  deleteTask(task: ITask) {
    this.selectedTask = task;
    // this.taskService.deleteTask(this.selectedTask);
  }
}
