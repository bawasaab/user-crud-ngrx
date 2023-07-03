import { createAction, createReducer, on } from "@ngrx/store";
import { AppStateModel } from "./app-state.model";

const initialUserState: AppStateModel = {
  isLoggedIn: false
}

export const appReducer = createReducer<AppStateModel>(
  initialUserState
)
