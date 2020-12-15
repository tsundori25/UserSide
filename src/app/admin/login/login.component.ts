import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  login() {
    this.authService.login(this.loginForm.value);
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }
}
