import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UserModel, UserStateModel } from './user.model';
import { saveUserAction, setCurrentUserAction, updateUserAction } from "./user.action";
import { state } from "@angular/animations";

const initialUserState: UserStateModel = {
  currentUser: {
    id: 0,
    firstname: '',
    lastname: ''
  },
  usersList: []
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

export const userReducer = createReducer<UserStateModel>(
  initialUserState,
  on(setCurrentUserAction, (state, action): UserStateModel => {
    // console.log('inside userReducer')
    // console.log('inside userReducer state', state)
    // console.log('inside userReducer action', JSON.stringify(action))
    return {
      ...state,
      currentUser: action.user
    }
  }),
  on(saveUserAction, (state, action): UserStateModel => {
    return {
      ...state,
      usersList: state['usersList'].concat(action.user)
    }
  }),
  on(updateUserAction, (state, action): UserStateModel => {
    console.log('state', state)
    console.log('action', action)
    // const updateUser = state.usersList.map((item) => action.user.id === item.id ? action.user : item)
    const updateUser = state.usersList.map((item) => {
      console.log('action', action)
      console.log('action.user.id', action.user.id)
      console.log('item.id', item.id)
      return action.user.id === item.id ? action.user : item
    })
    console.log('updateUser', updateUser)
    return {
      ...state,
      usersList: updateUser
    }
  })
)
