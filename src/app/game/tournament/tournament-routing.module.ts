import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentComponent } from './tournament.component';
import { BracketBadmintonComponent } from './bracket-badminton/bracket-badminton.component';
import { InfoBadmintonComponent } from './info-tournament/info-tournament..component';
import { ListTournamentComponent } from './list-team/list-team.component';

const routes: Routes = [
  {
    path: 'tournament',
    component: TournamentComponent,
    children: [
      {
        path: 'team',
        component: ListTournamentComponent,
      },
      {
        path: 'informasi',
        component: InfoBadmintonComponent,
      },
      {
        path: 'bracket',
        component: BracketBadmintonComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {}
