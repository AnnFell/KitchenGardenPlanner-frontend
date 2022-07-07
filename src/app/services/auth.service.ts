import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../types/account";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Account | undefined;

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {
  }

  login(user: Account) {
    return this.http.post("http://localhost:8080/api/login", user);
  }

  register(user: Account) {
    return this.http.post("http://localhost:8080/api/register", user)
  }

  checkIfLoggedIn() {
    const id = sessionStorage.getItem('id');
    if (!id) {
      this.router.navigate(['']);
      this.openSnackBar("You need to login first", "Ok");
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }
}
