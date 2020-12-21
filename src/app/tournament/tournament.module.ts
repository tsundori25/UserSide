import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament.component';
import { ListTournamentComponent } from './list-team/list-team.component';
import { BracketTournamentComponent } from './bracket-tournament/bracket-tournament.component';

@NgModule({
  declarations: [
    TournamentComponent,
    ListTournamentComponent,
    BracketTournamentComponent,
  ],
  imports: [CommonModule, TournamentRoutingModule],
})
export class TournamentModule {}
