import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/app/services/tournament.service';
import { TournamentModule } from '../tournament.module';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css'],
})
export class ListTournamentComponent implements OnInit {
  tournamentData: TournamentModule[];
  page: number;
  constructor(private tournamentServie: TournamentService) {}

  ngOnInit(): void {
    this.getIndexTournament();
  }

  getIndexTournament() {}
}
