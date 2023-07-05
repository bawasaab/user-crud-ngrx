import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserMasterComponent } from './user-master/user-master.component';
import { UserListComponent } from './user-list/user-list.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user.reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { UserShellComponent } from './user-shell/user-shell.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effect';


@NgModule({
  declarations: [
    UserMasterComponent,
    UserListComponent,
    UserShellComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([
      UserEffects
    ])
  ]
})
export class UserModule { }
