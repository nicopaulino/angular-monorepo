import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { addTask, ITask, TaskState, updateTask } from '@angular-monorepo/shared-task';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';

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
    private store: Store<TaskState>
  ) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: [this.task ? this.task.title : ''],
      description: [this.task ? this.task.description : ''],
    });
  }

  onSubmit() {
    if (this.task) {
      console.log('exisiting task');
      // Update existing task
      const updatedTask: ITask = { ...this.task, ...this.taskForm.value };
      this.store.dispatch(updateTask({ task: updatedTask }));
    } else {
      console.log('new task');
      // Create new task
      const newTask: ITask = {
        id: Date.now(), // Simple ID generation
        ...this.taskForm.value,
      };
      this.store.dispatch(addTask({ task: newTask }));
    }

    this.taskForm.reset();
  }
}
