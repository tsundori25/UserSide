import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from 'src/app/models/tournament.interface';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-info-tournament',
  templateUrl: './info-tournament.component.html',
  styleUrls: ['./info-tournament.component.css'],
})
export class InfoBadmintonComponent implements OnInit {
  dataDetail: Tournament;
  constructor(
    private tournamentService: TournamentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  getDetailTournament() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tournamentService.getDetailTournament(id).subscribe((res) => {
      this.dataDetail = res;
    });
  }
}
