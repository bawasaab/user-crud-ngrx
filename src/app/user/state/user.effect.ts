import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../service/user.service";
import { getUsersAction, loadedUserFailAction, loadedUserSuccessAction } from "./user.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { UserModel } from "./user.model";
import { Store } from "@ngrx/store";
import { getUserList, getUserListLoaded } from "./user.reducers";

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUsersAction),
      mergeMap(() => {
        console.log("this.isLoaded", this.isLoaded)
        if(!this.isLoaded) {
          console.log("inside this.isLoaded if")
          return this.userService.getUsers().pipe(
            map((inUsers) => {
              let users: UserModel[] = inUsers.data;
              return loadedUserSuccessAction({ users });
            }),
            catchError((error) => {
              return of(loadedUserFailAction({ error: error.message }));
            })
          );
        } else {
          console.log("inside this.isLoaded else")
          return of(loadedUserSuccessAction({ users: this.users }))
        }
      }
      )
    )
  })

  isLoaded!: boolean
  users!: UserModel[]
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<UserModel>
  ) {
    this.store.select(getUserListLoaded).subscribe((flag) => {
      this.isLoaded = flag
      if(this.isLoaded) {
        this.store.select(getUserList).subscribe((users) => this.users = users)
      }
    })
  }
}
