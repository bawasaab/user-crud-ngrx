import { createAction, props } from "@ngrx/store";
import { UserModel } from "./user.model";

export const saveUserAction = createAction('[UserMater] Save user', props<{user: UserModel}>())
export const insertUserSuccessAction = createAction('[UserMater] Insert user', props<{user: UserModel}>())
export const insertUserFailAction = createAction('[UserMater] Insert user', props<{error: String}>())

export const updateUserAction = createAction('[UserMater] Update user', props<{user: UserModel}>())
export const setCurrentUserAction = createAction('[UserMater] Set current user', props<{user: UserModel}>())
export const removeCurrentUserAction = createAction('[UserMater] Remove current user')
export const deleteUserAction = createAction('[UserList] Delete user', props<{user: UserModel}>())
export const getUsersAction = createAction('[UserList] Get users')

export const loadedUserSuccessAction = createAction('[UserList] Loaded user success', props<{users: UserModel[]}>())
export const loadedUserFailAction = createAction('[UserList] Loaded user fail', props<{error: String}>())
