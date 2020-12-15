import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl } from 'src/environments/environment';
import { SignUpUser, TeamRegister } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  singUp(signUp: SignUpUser) {
    return this.http.put(`${baseUrl}user/register`, signUp).subscribe(
      (success) => {
        window.alert('Anda berhasil register');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createTeam(userId: string, teamRegister: TeamRegister) {
    return this.http
      .put(`${baseUrl}team/register/${userId}`, teamRegister)
      .subscribe(
        (sucess) => {
          window.alert('Anda berhasil membuat team');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  addMemberTeam(teamId: string, userId: string) {
    return this.http
      .patch(`${baseUrl}team/add-member/${teamId}`, {
        memberTeam: userId,
      })
      .subscribe(
        (sucess) => {
          window.alert('Anda berhasil join team');
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
