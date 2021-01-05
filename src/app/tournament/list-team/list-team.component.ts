import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from 'src/app/models/tournament.interface';
import { TournamentService } from 'src/app/services/tournament.service';
import { TournamentModule } from '../tournament.module';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css'],
})
export class ListTournamentComponent implements OnInit {
  tournamentData: Tournament;
  partipants: any;
  constructor(
    private tournamentService: TournamentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDetailTournament();
  }

  getDetailTournament() {
    this.route.parent.params.subscribe((res) => {
      this.tournamentService
        .getDetailTournament(res.permalink)
        .subscribe((data: any) => {
          this.tournamentData = data;
          this.partipants = data.participants;
        });
    });
  }
}
