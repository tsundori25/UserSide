import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Tournament } from 'src/app/models/tournament.interface';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-info-tournament',
  templateUrl: './info-tournament.component.html',
  styleUrls: ['./info-tournament.component.css'],
})
export class InfoBadmintonComponent implements OnInit {
  dataDetail: any;
  constructor(
    private tournamentService: TournamentService,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getDetailTournament();
  }

  getDetailTournament() {
    this.route.parent.params.subscribe((res) => {
      this.tournamentService
        .getDetailTournament(res.permalink)
        .subscribe((data: any) => {
          this.dataDetail = data;
          console.log(this.dataDetail.prizePool.firstPrize);
        });
    });
  }

  registerTournament(userData) {
    this.tournamentService.registerTournamentSolo(
      userData.userId,
      this.dataDetail._id
    );
  }
}
