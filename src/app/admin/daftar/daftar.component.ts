import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.css'],
})
export class DaftarComponent implements OnInit {
  createTeam: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}
  private initForm() {
    this.createTeam = this.fb.group({
      teamName: [''],
    });
  }
  create() {
    const userPayload = this.authService.getPayloadData;
    this.userService.createTeam(userPayload.userId, this.createTeam.value);
  }
}
