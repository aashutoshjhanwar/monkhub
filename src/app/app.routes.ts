import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../app/views/layout/layout-routing').then((m) => m.LAYOUT_ROUTES)
    },
    
 
];
