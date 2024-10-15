import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component')
            },
            
            {
                path: 'about',
                loadComponent: () => import('./pages/about/about.component')
            },
            {
                path: 'faq',
                loadComponent: () => import('./pages/faq/faq.component')
            },
            {
                path: 'contact',
                loadComponent: () => import('./pages/contact/contact.component')
            },
            {
                path: 'services',
                loadComponent: () => import('./pages/services/services.component')
            },
            {
                path: 'services/rotational-molding',
                loadComponent: () => import('./pages/rotational-molding/rotational-molding.component')
            },
            {
                path: 'services/shipping',
                loadComponent: () => import('./pages/shipping/shipping.component')
            },
            {
                path: 'services/mold-making',
                loadComponent: () => import('./pages/mold-making/mold-making.component')
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
