import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UserModel, UserStateModel } from './user.model';
import { saveUserAction, setCurrentUserAction } from "./user.action";
import { state } from "@angular/animations";

const initialUserState: UserStateModel = {
  currentUser: {
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
  on(setCurrentUserAction, (state, inData): UserStateModel => {
    // console.log('inside userReducer')
    // console.log('inside userReducer state', state)
    // console.log('inside userReducer inData', JSON.stringify(inData))
    return {
      ...state,
      currentUser: inData.user
    }
  }),
  on(saveUserAction, (state, inData): UserStateModel => {
    return {
      ...state,
      usersList: state['usersList'].concat(inData.user)
    }
  })
)
