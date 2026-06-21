import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('../../pages/dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'criancas',
    loadComponent: () => import('./pages/criancas/criancas.component').then(m => m.CriancasComponent)
  },
  {
    path: 'campanhas',
    loadComponent: () => import('./pages/campanhas/campanhas.component').then(m => m.CampanhasComponent)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
