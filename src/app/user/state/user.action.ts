import { createAction, props } from "@ngrx/store";
import { UserModel } from "../user.model";

export const saveUserAction = createAction('[UserMater] Save user', props<UserModel>())
