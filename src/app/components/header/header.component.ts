import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/store/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  public componentActive: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authService.getAuthStatusListener().subscribe(isLogin => {
      console.log(isLogin);
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    // this.componentActive = false;
  }
}
