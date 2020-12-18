import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketBadmintonComponent } from '../tournament/bracket-badminton/bracket-badminton.component';
import { BadmintonComponent } from './badminton.component';
import { BracketComponent } from './bracket/bracket.component';
import { InformasiComponent } from './informasi/informasi.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path:'',
    component: BadmintonComponent,
    children:[
      {
        path:'team',
        component:TeamComponent
      },
      {
        path:'informasi',
        component:InformasiComponent
      },
      {
        path:'bracket',
        component:BracketComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadmintonRoutingModule { }
