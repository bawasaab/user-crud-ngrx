import { AppStateModel } from "src/app/state/app-state.model";

export interface UserModel {
  firstname: String;
  lastname: String;
}

export interface UserStateModel extends AppStateModel {
  currentUser: UserModel;
  usersList: UserModel[];
}
