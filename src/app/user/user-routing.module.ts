import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: UserListComponent
  // },
  // {
  //   path: 'master',
  //   component: UserMasterComponent
  // },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'list'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
