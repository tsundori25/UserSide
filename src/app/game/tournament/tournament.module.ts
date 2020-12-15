import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament.component';
import { ListTournamentComponent } from './list-team/list-team.component';
import { BracketBadmintonComponent } from './bracket-badminton/bracket-badminton.component';

@NgModule({
  declarations: [
    TournamentComponent,
    ListTournamentComponent,
    BracketBadmintonComponent,
  ],
  imports: [CommonModule, TournamentRoutingModule],
})
export class TournamentModule {}
