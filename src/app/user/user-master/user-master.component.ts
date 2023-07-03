import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveUserAction } from '../state/user.action';
import { UserModel } from '../state/user.model';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent {

  form!: FormGroup;
  isSubmitted = false;

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

  // convenience getter for easy access to form fields
	get f() { return this.form.controls; }

  // convenience getter for easy access to form values
  get frmValues(): UserModel { return this.form.value; }

  handleSubmit() {
    this.isSubmitted = true;
    console.log('this.frmValues', this.frmValues);
    console.log( 'this.f', this.f );
    this.store.dispatch(saveUserAction({user: this.frmValues}))
  }


}
