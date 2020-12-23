import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentComponent } from './tournament/tournament.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [TournamentComponent],
  imports: [CommonModule, GameRoutingModule],
})
export class GameModule {}
