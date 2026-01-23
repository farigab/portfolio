import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',                    // URL raiz: farigab.com/
    loadComponent: () => import('./features/home/home')
      .then(m => m.HomeComponent)
  }, {
    path: 'about',              // URL: farigab.com/about
    loadComponent: () => import('./features/about/about')
      .then(m => m.AboutComponent)
  },
  {
    path: 'projects',           // URL: farigab.com/projects
    loadComponent: () => import('./features/projects/projects')
      .then(m => m.ProjectsComponent)
  },
  {
    path: 'experience',         // URL: farigab.com/experience
    loadComponent: () => import('./features/experience/experience')
      .then(m => m.ExperienceComponent)
  },
  {
    path: 'contact',            // URL: farigab.com/contact
    loadComponent: () => import('./features/contact/contact')
      .then(m => m.ContactComponent)
  },
  {
    path: '**',                 // Qualquer outra URL (404)
    redirectTo: ''              // Redireciona para a home
  }
];
