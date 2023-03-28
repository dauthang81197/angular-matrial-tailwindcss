import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NoAuthGuard } from '@app/auth/quards/noAuth.quard';
import { AuthGuard } from '@app/auth/quards/auth.guard';

const routes: Routes = [
  // Redirect empty path to '/dashboard'
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    children: [
      {path: 'sign-in', loadChildren: () => import('./modules/auth/sign-up/sign-up.module').then(m => m.SignUpModule)},
    ]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'components',
        loadChildren: () => import('./features/components/components.module').then(m => m.ComponentsModule)
      },
      {
        path: 'games',
        loadChildren: () => import('./features/games/games.module').then(m => m.GamesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
