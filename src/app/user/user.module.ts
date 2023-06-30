import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserMasterComponent } from './user-master/user-master.component';
import { UserListComponent } from './user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducers';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserMasterComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', userReducer)
  ]
})
export class UserModule { }
