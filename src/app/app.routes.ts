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
                path: 'contact',
                loadComponent: () => import('./pages/contact/contact.component')
            },
            {
                path: 'faq',
                loadComponent: () => import('./pages/faq/faq.component')
            },
            {
                path: 'quality',
                loadComponent: () => import('./pages/quality/quality.component')
            },
            {
                path: 'services',
                loadComponent: () => import('./pages/services/services.component')
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
                path: 'services/calendering',
                loadComponent: () => import('./pages/rubber-calendering/rubber-calendering.component')
            },
            {
                path: 'services/mandrel-formed-hoses',
                loadComponent: () => import('./pages/silicone-hose-wrapping/silicone-hose-wrapping.component')
            },
            {
                path: 'services/rubber-molding',
                loadComponent: () => import('./pages/rubber-molding/rubber-molding.component')
            },
            {
                path: 'services/rubber-molding/more-processes',
                loadComponent: () => import('./pages/more-molding-processes/more-molding-processes.component')
            },
            {
                path: 'services/rubber-molding/mold-making',
                loadComponent: () => import('./pages/mold-making/mold-making.component')
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
    /*
    {
        path: '**',
        redirectTo: '',
    },
    */
];
