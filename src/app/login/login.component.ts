import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Account} from "../types/account";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggedIn = false;
  wantsToRegister = false;

  user: Account = {
    id: undefined,
    userName: "",
    password: ""
  }

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  showRegisterButton() {
    this.wantsToRegister = true;
  }

  handleRegisterButton() {
    this.authService.register(this.user).subscribe();
    this.wantsToRegister = false;
  }

  handleLoginButton() {
    this.authService.login(this.user).subscribe(
      data => {
        this.authService.currentUser = data as Account;
        // @ts-ignore
        sessionStorage.setItem('id', this.authService.currentUser.id.toString());
        this.router.navigate(['/dashboard']);
        this.openSnackBar("You are logged in, " + this.authService.currentUser.userName, "OK");
      }, error => {
        console.log(error);
        this.openSnackBar(error.error.message, "Close");
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {duration: 3000});
  }
}
