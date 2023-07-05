import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from '../state/user.model';
import { Observable } from 'rxjs';
import { setCurrentUserAction, deleteUserAction, getUsersAction } from '../state/user.actions';
import { getUserList, getUserListError } from '../state/user.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  $users!: Observable<UserModel[]>
  $error!: Observable<String>;

  constructor(
    private store: Store<UserModel>
  ) {}

  ngOnInit() {
    this.store.dispatch(getUsersAction())
    this.$users = this.store.select(getUserList)
    this.$error = this.store.select(getUserListError)
  }

  selectUser(user: UserModel) {
    this.store.dispatch(setCurrentUserAction({user}))
  }

  deleteUser(user: UserModel) {
    if(confirm("Are you sure ?")) {
      this.store.dispatch(deleteUserAction({user}))
      alert("User Deleted")
    }
  }
}
