import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament.component';
import { InfoBadmintonComponent } from './info-tournament/info-tournament..component';
import { ListTournamentComponent } from './list-team/list-team.component';

@NgModule({
  declarations: [
    TournamentComponent,
    InfoBadmintonComponent,
    ListTournamentComponent,
  ],
  imports: [CommonModule, TournamentRoutingModule],
})
export class TournamentModule {}
