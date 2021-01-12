import { Component, OnInit } from '@angular/core';
import { Tournament } from '../models/tournament.interface';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  searchText: Tournament;
  tournamentData: Tournament;
  tournaments: Tournament;

  page: number = 1;
  count: number;
  pageSize: number;

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.getIndexTournament();
  }

  getIndexTournament() {
    const params = { page: this.page };

    this.tournamentService.getIndexTournament(params).subscribe(
      (res) => {
        this.tournamentData = res.data;
        this.count = res.pagination.totalRecord;
        this.pageSize = res.pagination.limit;
      },
      (error: any) => {
        //console.log(error);
      }
    );
  }

  handlePageChange(event): void {
    this.page = event;
    this.getIndexTournament();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getIndexTournament();
  }
}
