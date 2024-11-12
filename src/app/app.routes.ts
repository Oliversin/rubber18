import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            
            {
                path: '',
                loadComponent: () => import('./pages/home/home.component'),
                
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
                path: 'services/post-processing',
                loadComponent: () => import('./pages/post-processing/post-processing.component')
            },
            {
                path: 'services/foam-insulation',
                loadComponent: () => import('./pages/foam-insulation/foam-insulation.component')
            },
            {
                path: 'services/rubber-extrusion',
                loadComponent: () => import('./pages/rubber-extrusion/rubber-extrusion.component')
            },
            {
                path: 'services/compounding',
                loadComponent: () => import('./pages/compounding/compounding.component')
            },
            {
                path: 'services/silicone-hose-wrapping',
                loadComponent: () => import('./pages/silicone-hose-wrapping/silicone-hose-wrapping.component')
            },
            {
                path: 'services/rubber-molding',
                loadComponent: () => import('./pages/rubber-molding/rubber-molding.component')
            },
            {
                path: 'services/other-services',
                loadComponent: () => import('./pages/other-services/other-services.component')
            },
            {
                path: 'engineers',
                loadComponent: () => import('./pages/engineers/engineers.component')
            },
            {
                path: 'privacy-policy',
                loadComponent: () => import('./pages/privacy-policy/privacy-policy.component')
            },
            {
                path: 'terms-condition',
                loadComponent: () => import('./pages/terms-condition/terms-condition.component')
            },

        ]
    },
    {
        path: '**',
        redirectTo: '',
    },
];
