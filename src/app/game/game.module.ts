import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentComponent } from '../tournament/tournament.component';
import { FutsalComponent } from './futsal/futsal.component';
import { TeamFutsalComponent } from './futsal/team-futsal/team-futsal.component';

@NgModule({
  declarations: [TournamentComponent, FutsalComponent, TeamFutsalComponent],
  imports: [CommonModule],
})
export class GameModule {}
