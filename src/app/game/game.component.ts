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

  page = 1;
  count = 0;
  pageSize = 4;
  pageSizes = [4,8,12,16,24];

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.getIndexTournament();
  }
  getRequestParams( page, pageSize): any {
    // tslint:disable-next-line:prefer-const
    let params = {};
    
    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  getIndexTournament() {
    const params = this.getRequestParams(this.page, this.pageSize);
    
    this.tournamentService.getIndexTournament().subscribe(
      (res) => {
        this.tournamentData = res;
      },
      (error: any) => {
        //console.log(error);
      }
    );
    this.tournamentService.getAll (params)
    .subscribe(
      response => {
        const { tournaments, totalItems } = response;
        this.tournaments = tournaments;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });  
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
