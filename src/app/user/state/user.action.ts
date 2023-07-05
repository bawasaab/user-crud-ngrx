import { createAction, props } from "@ngrx/store";
import { UserModel } from "./user.model";

export const saveUserAction = createAction('[UserMater] Save user', props<{user: UserModel}>())
export const insertUserSuccessAction = createAction('[UserMater] Insert user Success', props<{user: UserModel}>())
export const insertUserFailAction = createAction('[UserMater] Insert user Fail', props<{error: String}>())

export const updateUserAction = createAction('[UserMater] Update user', props<{user: UserModel}>())
export const updateUserSuccessAction = createAction('[UserMater] Update user success', props<{user: UserModel}>())
export const updateUserFailAction = createAction('[UserMater] Update user fail', props<{error: String}>())

export const setCurrentUserAction = createAction('[UserMater] Set current user', props<{user: UserModel}>())
export const removeCurrentUserAction = createAction('[UserMater] Remove current user')

export const deleteUserAction = createAction('[UserList] Delete user', props<{user: UserModel}>())
export const deleteUserSuccessAction = createAction('[UserList] Delete user success')
export const deleteUserFailAction = createAction('[UserList] Delete user fail', props<{error: String}>())

export const getUsersAction = createAction('[UserList] Get users')

export const loadedUserSuccessAction = createAction('[UserList] Loaded user success', props<{users: UserModel[]}>())
export const loadedUserFailAction = createAction('[UserList] Loaded user fail', props<{error: String}>())
