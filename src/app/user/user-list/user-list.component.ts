import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from '../state/user.model';
import { getUserList } from '../state/user.reducers';
import { Observable } from 'rxjs';
import { setCurrentUserAction } from '../state/user.action';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  $users!: Observable<UserModel[]>

  constructor(
    private store: Store<UserModel>
  ) {}

  ngOnInit() {
    this.$users = this.store.select(getUserList)
  }

  selectUser(user: UserModel) {
    this.store.dispatch(setCurrentUserAction({user}))
  }
}
