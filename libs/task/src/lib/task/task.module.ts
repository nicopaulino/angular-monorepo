import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TaskComponent } from './task.component';
import { TaskFormComponent } from '@angular-monorepo/task-form';
import { TaskEffects } from './+state/task.effects';
import { TASK_FEATURE_KEY, taskReducer } from './+state/task.reducer';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskFormComponent,
    StoreModule.forFeature(TASK_FEATURE_KEY, taskReducer),
    EffectsModule.forFeature([TaskEffects]),
  ],
  exports: [TaskComponent],
})
export class TaskModule {}
