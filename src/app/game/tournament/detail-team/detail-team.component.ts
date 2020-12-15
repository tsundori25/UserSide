import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.css'],
})
export class DetailTeamComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  joinTeam(teamId: string) {
    const userPayload = this.authService.getPayloadData;
    this.userService.addMemberTeam(teamId, userPayload.userId);
  }
}
