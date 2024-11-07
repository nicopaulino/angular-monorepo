import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ITask, TaskService } from '@angular-monorepo/shared-task';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'lib-task-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent implements OnInit {
  @Input() task?: ITask; // Optional input for editing an existing task
  @Output() formSubmitted = new EventEmitter<void>(); // Output property to emit an event
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: [this.task ? this.task.title : ''],
      description: [this.task ? this.task.description : ''],
    });
  }

  onSubmit() {
    if (this.task) {
      // Update existing task
      const updatedTask: ITask = { ...this.task, ...this.taskForm.value };
      this.taskService.updateTask(updatedTask);
    } else {
      // Create new task
      const newTask: ITask = {
        id: Date.now(), // Simple ID generation
        ...this.taskForm.value,
      };
      this.taskService.addTask(newTask);
    }

    this.taskForm.reset();
  }
}
