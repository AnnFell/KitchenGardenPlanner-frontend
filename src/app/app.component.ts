import {Component} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Kitchen Garden Planner';
  loggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    if (typeof this.authService.currentUser != undefined) {
      this.loggedIn = true;
    }
  }

  handleLogOut() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
