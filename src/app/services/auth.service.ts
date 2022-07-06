import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Account} from "../types/account";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Account | undefined;

  constructor(private http: HttpClient) {
  }

  login(user: Account) {
    return this.http.post("http://localhost:8080/api/login", user);
  }

  register(user: Account) {
    return this.http.post("http://localhost:8080/api/register", user)
  }
}
