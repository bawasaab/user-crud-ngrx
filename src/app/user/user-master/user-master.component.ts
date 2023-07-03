import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveUserAction, updateUserAction } from '../state/user.action';
import { UserModel } from '../state/user.model';
import { getCurrentUser } from '../state/user.reducers';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit {

  form!: FormGroup;
  isSubmitted = false;
  user!: UserModel;
  cnt: number = 1
  uid: number = 0

  constructor(
    private store: Store<UserModel>,
    private formbuilder: FormBuilder
  ) {

    this.form = formbuilder.group({
      id: [],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    }
    )
  }

  ngOnInit() {
    this.store.select(getCurrentUser).subscribe((inUser) => {
      this.user = inUser
      if(this.user) {
        this.uid = this.user.id
        this.patchUser(this.user)
      }
    })
  }

  // convenience getter for easy access to form fields
	get f() { return this.form.controls; }

  // convenience getter for easy access to form values
  get frmValues(): UserModel { return this.form.value; }

  handleSubmit() {
    this.isSubmitted = true;
    if(this.uid > 0) {
      this.store.dispatch(updateUserAction({user: this.frmValues}))
      alert("User Updated")
    } else {
      this.frmValues['id'] = this.cnt++
      this.store.dispatch(saveUserAction({user: this.frmValues}))
      alert("User Inserted")
    }
    this.isSubmitted = false;
    this.form.reset()
  }

  patchUser(user: UserModel) {
    this.form.patchValue({
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname
    })
  }
}
