import { createAction, createReducer, on } from "@ngrx/store";
import { UserModel } from "../user.model";
import { saveUserAction } from "./user.action";

const initialUserState: UserModel = {
  firstname: '',
  lastname: ''
}

export const userReducer = createReducer<UserModel>(
  initialUserState,
  on(saveUserAction, (state, inData): UserModel => {
    console.log('inside userReducer')
    console.log('inside userReducer state', state)
    console.log('inside userReducer inData', inData)
    return {
      ...state,
      ...inData
    }
  })
)
