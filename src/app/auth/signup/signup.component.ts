import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthData } from "../store/models/auth-data.model";
import { AuthService } from "../store/services/auth.service";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  isLoading = false;
  public formGroup: FormGroup;

  constructor(public fb: FormBuilder, public authService: AuthService) {}

  ngOnInit(): void {
    this.createForm();
  }

  /* Reactive form */
  createForm() {
    this.formGroup = this.fb.group({
      firstName: "Văn A",
      lastName: "Trần",
      gender: "Nam",
      phone: "012154875457",
      email: ["vinh@gmail.com", [Validators.required, Validators.email]],
      password: ["123123", Validators.required]
    });
  }

  onSave() {
    if (this.formGroup.valid) {
      const user: AuthData = {
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
        firstName: this.formGroup.value.firstName,
        lastName: this.formGroup.value.lastName,
        gender: this.formGroup.value.gender,
        phone: this.formGroup.value.phone
      };
      debugger;
      this.authService.createUser(user);
    }
  }
}
