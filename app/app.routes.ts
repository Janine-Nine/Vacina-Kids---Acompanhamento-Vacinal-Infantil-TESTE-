import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page')
        .then(m => m.HomePage)
  },

  {
    path: 'dashboard',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'criancas',
    loadComponent: () =>
      import('./criancas/criancas.page')
        .then(m => m.CriancasPage)
  },

  {
    path: 'detalhes-crianca',
    loadComponent: () =>
      import('./detalhes-crianca/detalhes-crianca.page')
        .then(m => m.DetalhesCriancaPage)
  },

  {
    path: 'campanhas',
    loadComponent: () =>
      import('./campanhas/campanhas.page')
        .then(m => m.CampanhasPage)
  },

  {
    path: '**',
    redirectTo: 'home'
  }

];
