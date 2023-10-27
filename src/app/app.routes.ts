import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'genero',
    loadComponent: () => import('./genero/genero.page').then( m => m.GeneroPage)
  },
  {
    path: 'edad',
    loadComponent: () => import('./edad/edad.page').then( m => m.EdadPage)
  },
  {
    path: 'pais',
    loadComponent: () => import('./pais/pais.page').then( m => m.PaisPage)
  },
  {
    path: 'clima',
    loadComponent: () => import('./clima/clima.page').then( m => m.ClimaPage)
  },
  {
    path: 'wordpress',
    loadComponent: () => import('./wordpress/wordpress.page').then( m => m.WordpressPage)
  },
  {
    path: 'acercade',
    loadComponent: () => import('./acercade/acercade.page').then( m => m.AcercadePage)
  },
];
