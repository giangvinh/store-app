import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../store/services/auth.service";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  isLoading = false;
  public formGroup: FormGroup;

  constructor(public fb: FormBuilder, public authService: AuthService) {}

  ngOnInit(): void {
    this.createForm();
  }

  /* Reactive form */
  createForm() {
    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onSave() {
    if (this.formGroup.valid) {
      const user = {
        email: this.formGroup.value.email,
        password: this.formGroup.value.password
      };
      this.authService.login(user);
      console.log(user);
    }
  }
}
