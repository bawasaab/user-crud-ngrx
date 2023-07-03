import { AppStateModel } from "src/app/state/app-state.model";

export interface UserModel extends AppStateModel {
  firstname: String;
  lastname: String;
}
