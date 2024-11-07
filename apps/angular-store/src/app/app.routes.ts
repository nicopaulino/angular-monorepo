import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@angular-monorepo/tasks-feature').then((m) => m.TasksFeatureComponent),
    pathMatch: 'full',
  }
];
