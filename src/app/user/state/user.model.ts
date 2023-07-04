import { AppStateModel } from "src/app/state/app-state.model";

export interface UserModel {
  id: number;
  firstname: String;
  lastname: String;
}

export interface UserStateModel extends AppStateModel {
  currentUser: UserModel;
  usersListLoadedFlag: boolean;
  usersList: UserModel[];
  error: String;
}
