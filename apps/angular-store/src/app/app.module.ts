import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { TaskEffects, taskReducer, TaskService } from '@angular-monorepo/shared-task';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({tasks: taskReducer}),
    EffectsModule.forRoot([TaskEffects]),
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
