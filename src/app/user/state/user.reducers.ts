import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UserModel, UserStateModel } from './user.model';
import { deleteUserAction, saveUserAction, setCurrentUserAction, updateUserAction, removeCurrentUserAction, loadedUserSuccessAction, getUsersAction, loadedUserFailAction, insertUserSuccessAction, insertUserFailAction, updateUserFailAction, updateUserSuccessAction } from "./user.action";

const initialUserState: UserStateModel = {
  currentUser: {
    id: 0,
    firstname: '',
    lastname: ''
  },
  usersListLoadedFlag: false,
  usersList: [],
  error: ''
}

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

export const userReducer = createReducer<UserStateModel>(
  initialUserState,
  on(saveUserAction, (state, action): UserStateModel => {
    return {
      ...state,
      usersList: state['usersList'].concat(action.user)
    }
  }),
  on(setCurrentUserAction, (state, action): UserStateModel => {
    return {
      ...state,
      currentUser: action.user
    }
  }),
  on(updateUserAction, (state, action): UserStateModel => {
    const updateUser = state.usersList.map((item) => action.user.id === item.id ? action.user : item)
    return {
      ...state,
      usersList: updateUser
    }
  }),
  on(deleteUserAction, (state, action): UserStateModel => {
    const remainaingUsers = state.usersList.filter((item) => action.user.id !== item.id ? item : '')
    return {
      ...state,
      usersList: remainaingUsers
    }
  }),
  on(removeCurrentUserAction, (state, action): UserStateModel => {
    return {
      ...state,
      currentUser: initialUserState.currentUser
    }
  }),
  on(loadedUserSuccessAction, (state, action): UserStateModel => {
    return {
      ...state,
      usersList: action.users,
      error: '',
      usersListLoadedFlag: action.users.length ? true : false
    }
  }),
  on(loadedUserFailAction, (state, action): UserStateModel => {
    return {
      ...state,
      usersList: [],
      error: action.error
    }
  }),
  on(insertUserSuccessAction, (state, action): UserStateModel => {
    const updateUser = state.usersList.map((item) => {
      // return action.user.id === item.id ? action.user : item
      return 0 === item.id ? action.user : item
    })
    return {
      ...state,
      usersList: updateUser,
      error: ''
    }
  }),
  on(insertUserFailAction, (state, action): UserStateModel => {
    return {
      ...state,
      error: action.error
    }
  }),
  on(updateUserSuccessAction, (state, action): UserStateModel => {
    const updateUser = state.usersList.map((item) => {
      // return action.user.id === item.id ? action.user : item
      return action.user.id === item.id ? action.user : item
    })
    return {
      ...state,
      usersList: updateUser,
      error: ''
    }
  }),
  on(updateUserFailAction, (state, action): UserStateModel => {
    return {
      ...state,
      error: action.error
    }
  }),
)
