import { createFeatureSelector, createSelector } from "@ngrx/store"
import { UserStateModel } from "./user.model"

const getUserFeatureState = createFeatureSelector<UserStateModel>('users')
export const getUserList = createSelector(
  getUserFeatureState,
  (state) => state.usersList
)

export const getCurrentUser = createSelector(
  getUserFeatureState,
  (state) => state.currentUser
)

export const getUserListError = createSelector(
  getUserFeatureState,
  (state) => state.error
)

export const getUserListLoaded = createSelector(
  getUserFeatureState,
  (state) => state.usersListLoadedFlag
)