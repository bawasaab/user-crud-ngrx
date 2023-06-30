import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserMasterComponent } from './user-master/user-master.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'master',
    component: UserMasterComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
