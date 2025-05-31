import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },

    {
        path: '',
        loadChildren: () => import('./log-reg/log-reg.module').then(m => m.LogRegModule)
    },

    {
        path: '',
        loadChildren: () => import('./appointment/appointment.module').then(m => m.AppointmentModule)
    },
];
