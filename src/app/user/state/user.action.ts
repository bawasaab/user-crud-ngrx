import { createAction, props } from "@ngrx/store";
import { UserModel } from "./user.model";

/**
 * insert user started
 */
export const saveUserAction = createAction('[UserMater] Save user', props<{user: UserModel}>())
export const insertUserSuccessAction = createAction('[UserMater] Insert user Success', props<{user: UserModel}>())
export const insertUserFailAction = createAction('[UserMater] Insert user Fail', props<{error: String}>())
/**
 * insert user ended
 */

/**
 * update user started
 */
export const updateUserAction = createAction('[UserMater] Update user', props<{user: UserModel}>())
export const updateUserSuccessAction = createAction('[UserMater] Update user success', props<{user: UserModel}>())
export const updateUserFailAction = createAction('[UserMater] Update user fail', props<{error: String}>())
/**
 * update user ended
 */

/**
 * delete user started
 */
export const deleteUserAction = createAction('[UserList] Delete user', props<{user: UserModel}>())
export const deleteUserSuccessAction = createAction('[UserList] Delete user success', props<{user: UserModel}>())
export const deleteUserFailAction = createAction('[UserList] Delete user fail', props<{error: String}>())
/**
 * delete user ended
 */

/**
 * get user list started
 */
export const getUsersAction = createAction('[UserList] Get users')
export const loadedUserSuccessAction = createAction('[UserList] Loaded user success', props<{users: UserModel[]}>())
export const loadedUserFailAction = createAction('[UserList] Loaded user fail', props<{error: String}>())
/**
 * get user list ended
 */

/**
 * set and remove user started
 */
export const setCurrentUserAction = createAction('[UserMater] Set current user', props<{user: UserModel}>())
export const removeCurrentUserAction = createAction('[UserMater] Remove current user')
/**
 * set and remove user started
 */