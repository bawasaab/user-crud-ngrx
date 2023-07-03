import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveUserAction, setCurrentUserAction } from '../state/user.action';
import { UserModel } from '../state/user.model';
import { Observable } from 'rxjs';
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

  constructor(
    private store: Store<UserModel>,
    private formbuilder: FormBuilder
  ) {

    this.form = formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    }
    )
  }

  ngOnInit() {
    this.store.select(getCurrentUser).subscribe((inUser) => {
      console.log('ngOnInit user master', inUser)
      this.user = inUser
      this.patchUser(this.user)
    })
  }

  // convenience getter for easy access to form fields
	get f() { return this.form.controls; }

  // convenience getter for easy access to form values
  get frmValues(): UserModel { return this.form.value; }

  handleSubmit() {
    this.isSubmitted = true;
    console.log('this.frmValues', this.frmValues);
    console.log( 'this.f', this.f );
    this.store.dispatch(saveUserAction({user: this.frmValues}))
    this.isSubmitted = false;
    this.form.reset()
  }

  patchUser(user: UserModel) {
    this.form.patchValue({
      firstname: user.firstname,
      lastname: user.lastname
    })
  }
}
