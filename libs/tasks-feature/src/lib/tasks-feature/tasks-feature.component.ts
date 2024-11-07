import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskListComponent } from '@angular-monorepo/task-list';
import { TaskFormComponent } from '@angular-monorepo/task-form';

@Component({
  selector: 'lib-tasks-feature',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    TaskListComponent,
    TaskFormComponent
  ],
  templateUrl: './tasks-feature.component.html',
  styleUrl: './tasks-feature.component.css',
})
export class TasksFeatureComponent {
  showForm = false;
  toggleForm() {
    this.showForm = !this.showForm;
  }
}
