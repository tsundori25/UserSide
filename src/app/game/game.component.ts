import { Component, OnInit } from '@angular/core';
import { Tournament } from '../models/tournament.interface';
import { TournamentService } from '../services/tournament.service';
import AOS from 'aos';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  tournamentData: Tournament;

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    AOS.init();

    this.getIndexTournaments();
  }

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 10,
    lazyload: true,
    dots: false,
    navSpeed: 700,
    navText: ['--->>', '<<---'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
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
