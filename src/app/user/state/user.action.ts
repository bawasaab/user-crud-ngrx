import { createAction, props } from "@ngrx/store";
import { UserModel } from "./user.model";

export const saveUserAction = createAction('[UserMater] Save user', props<{user: UserModel}>())
export const setCurrentUserAction = createAction('[UserMater] Set current user', props<{user: UserModel}>())
export const getUsersAction = createAction('[UserList] Get users')
