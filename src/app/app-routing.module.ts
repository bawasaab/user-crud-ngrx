import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserShellComponent } from './user/user-shell/user-shell.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserShellComponent,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
