import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../service/user.service";
import { deleteUserAction, deleteUserFailAction, deleteUserSuccessAction, getUsersAction, insertUserFailAction, insertUserSuccessAction, loadedUserFailAction, loadedUserSuccessAction, saveUserAction, updateUserAction, updateUserFailAction, updateUserSuccessAction } from "./user.action";
import { catchError, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { UserModel } from "./user.model";
import { Store } from "@ngrx/store";
import { getUserList, getUserListLoaded } from "./user.reducers";

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUsersAction),
      mergeMap(() => {
        if(!this.isLoaded) {
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
          return of(loadedUserSuccessAction({ users: this.users }))
        }
      }
      )
    )
  })

  insertUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(saveUserAction),
      withLatestFrom(this.store$),
      switchMap(([action, storeState]) => {
        return this.userService.insertUsers(action.user).pipe(
          map((inUsers) => {
            let user: UserModel = inUsers.data;
            return insertUserSuccessAction({ user });
          }),
          catchError((error) => {
            return of(insertUserFailAction({ error: error.message }));
          })
        );
      }
      )
    )
  })

  updateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateUserAction),
      withLatestFrom(this.store$),
      switchMap(([action, storeState]) => {
        return this.userService.updateUsers(action.user).pipe(
          map((inUsers) => {
            let user: UserModel = inUsers.data;
            return updateUserSuccessAction({ user });
          }),
          catchError((error) => {
            return of(updateUserFailAction({ error: error.message }));
          })
        );
      }
      )
    )
  })

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteUserAction),
      withLatestFrom(this.store$),
      switchMap(([action, storeState]) => {
        return this.userService.deleteUsers(action.user).pipe(
          map(() => {
            return deleteUserSuccessAction({user: action.user});
          }),
          catchError((error) => {
            return of(deleteUserFailAction({ error: error.message }));
          })
        );
      }
      )
    )
  })

  isLoaded!: boolean
  users!: UserModel[]
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store$: Store<UserModel>
  ) {
    this.store$.select(getUserListLoaded).subscribe((flag) => {
      this.isLoaded = flag
      if(this.isLoaded) {
        this.store$.select(getUserList).subscribe((users) => this.users = users)
      }
    })
  }
}
