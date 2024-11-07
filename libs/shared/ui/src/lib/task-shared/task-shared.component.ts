import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-task-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-shared.component.html',
  styleUrl: './task-shared.component.css',
})
export class TaskSharedComponent {}
