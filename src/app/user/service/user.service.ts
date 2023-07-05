import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { UserModel } from '../state/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    const url = `http://localhost:3000/users`;
    return this.httpClient
    .get(url)
    .pipe(
      map((e: any) => e),
      catchError((e: Response) => throwError(e))
    );
  }

  insertUsers(inData: UserModel) {
    const url = `http://localhost:3000/users`;
    const body: UserModel = {
      id: 0,
      firstname: inData.firstname,
      lastname: inData.lastname
    }
    return this.httpClient
    .post(url, body)
    .pipe(
      map((e: any) => e),
      catchError((e: Response) => throwError(e))
    );
  }
}
