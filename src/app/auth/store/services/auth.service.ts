import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, concat, Observable } from "rxjs";
import { filter, take } from "rxjs/operators";
import { environment } from "src/environments/environment";

import { AuthData } from "../models/auth-data.model";

const BACKEND_URL = environment.apiUrl + "/auth/";

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private userId: string;
  private authStatusListener: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId() {
    return this.userId;
  }

  getAuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }

  createUser(user: AuthData) {
    debugger;
    this.http.post(BACKEND_URL + "register", user).subscribe(
      () => {
        this.router.navigate(["/"]);
      },
      error => {
        return this.authStatusListener.next(false);
      }
    );
  }

  login(user: AuthData) {
    const authData: AuthData = { email: user.email, password: user.password };
    this.http
      .post<{ token: string; expiresIn: number; userId: string }>(BACKEND_URL + "signin", authData)
      .subscribe(
        response => {
          debugger;
          const token = response.token;
          this.token = token;
          if (token) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;
            this.userId = response.userId;
            const now = new Date();
            const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
            this.saveAuthData(token, expirationDate, this.userId);
            this.router.navigate(["/"]);
            return this.authStatusListener.next(true);
          }
        },
        error => {
          return this.authStatusListener.next(false);
        }
      );
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      return this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;

    this.userId = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
    return this.authStatusListener.next(false);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    };
  }
}
