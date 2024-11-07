import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

 export const LAYOUT_ROUTES: Routes =[
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../features/home/home-routing').then((m) => m.HOME_ROUTES),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      
    ],
  },
    ]