import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', redirectTo: 'dashboard/customer', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard/customer' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
