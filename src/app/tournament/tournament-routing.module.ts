import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentComponent } from './tournament.component';
import { InfoBadmintonComponent } from './info-tournament/info-tournament..component';
import { ListTournamentComponent } from './list-team/list-team.component';
import { BracketTournamentComponent } from './bracket-tournament/bracket-tournament.component';

const routes: Routes = [
  {
    path: ':permalink',
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
        component: BracketTournamentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {}
