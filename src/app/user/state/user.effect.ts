import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../service/user.service";
import { getUsersAction, loadedUserSuccessAction } from "./user.action";
import { map, mergeMap, of } from "rxjs";
import { UserModel } from "./user.model";

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUsersAction),
      mergeMap(() => this.userService.getUsers().pipe(
        map((inUsers) => {
          let users: UserModel[] = inUsers.data
          return loadedUserSuccessAction({ users })
        })
      ))
    )
  })

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
