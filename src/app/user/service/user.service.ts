import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    let url = `http://localhost:3000/users`;
    return this.httpClient
    .get(url)
    .pipe(
      map((e: any) => e),
      catchError((e: Response) => throwError(e))
    );
  }
}
