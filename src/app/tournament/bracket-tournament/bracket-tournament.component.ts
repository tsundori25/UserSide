import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bracket-tournament',
  templateUrl: './bracket-tournament.component.html',
  styleUrls: ['./bracket-tournament.component.css'],
})
export class BracketTournamentComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent.params.subscribe((res) => {
      console.log(res);
    });
  }
}
