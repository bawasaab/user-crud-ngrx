import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from '../state/user.model';
// import { getUsers } from '../state/user.reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // $users!: Observable<UserModel[]>
  $users!: UserModel[]

  constructor(
    private store: Store<UserModel>
  ) {}

    ngOnInit() {
      // this.store.select(getUsers).subscribe((state) => {
      //   console.log('users', state)
      //   // this.$users = users
      // })
    }
}
