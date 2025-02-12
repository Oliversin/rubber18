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
                path: 'services/rubber-molding/compression-molding',
                loadComponent: () => import('./pages/compression-molding/compression-molding.component')
            },
            {
                path: 'services/rubber-molding/transfer-molding',
                loadComponent: () => import('./pages/transfer-molding/transfer-molding.component')
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
                path: 'rubber-molding/products/o-rings',
                loadComponent: () => import('./pages/products/rubber-molding/o-rings/o-rings.component')
            },
            {
                path: 'rubber-molding/products/boots',
                loadComponent: () => import('./pages/products/rubber-molding/boots/boots.component')
            },
            {
                path: 'rubber-molding/products/bushings',
                loadComponent: () => import('./pages/products/rubber-molding/bushings/bushings.component')
            },
            {
                path: 'rubber-molding/products/bump-stops',
                loadComponent: () => import('./pages/products/rubber-molding/bump-stops/bump-stops.component')
            },
            {
                path: 'mandrel-formed-hoses/products/charge-air-cooler-hose-stainless-rings',
                loadComponent: () => import('./pages/products/mandrel-formed-hoses/charge-air-cooler-hose-stainless-rings/charge-air-cooler-hose-stainless-rings.component')
            },
            {
                path: 'mandrel-formed-hoses/products/fmk-lined-silicone-hoses',
                loadComponent: () => import('./pages/products/mandrel-formed-hoses/fmk-lined-silicone-hoses/fmk-lined-silicone-hoses.component')
            },
            {
                path: 'mandrel-formed-hoses/products/fvmq-lined-silicone-hoses',
                loadComponent: () => import('./pages/products/mandrel-formed-hoses/fvmq-lined-silicone-hoses/fvmq-lined-silicone-hoses.component')
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
        redirectTo: 'home',
    },
];
