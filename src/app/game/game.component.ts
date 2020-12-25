import { Component, OnInit } from '@angular/core';
import { Tournament } from '../models/tournament.interface';
import { TournamentService } from '../services/tournament.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  tournamentData: Tournament;
  data: any 

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.tournamentService.getTurnament().subscribe((succes: any) => {
      console.log(succes.resultIndex.data);
      this.data = succes.resultIndex.data;
      })

    this.getIndexTournaments();
  }

  getIndexTournaments() {
    this.tournamentService.getIndexTournament().subscribe(
      (res) => {
        this.tournamentData = res;
      },
      (error: any) => {
        //console.log(error);
      }
    );
  }
}
