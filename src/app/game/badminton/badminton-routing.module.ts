import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadmintonComponent } from './badminton.component';
import { BracketBadmintonComponent } from './bracket-badminton/bracket-badminton.component';
import { InfoBadmintonComponent } from './info-badminton/info-badminton.component';
import { RegisterBadmintonComponent } from './register-badminton/register-badminton.component';
import { TeamBadmintonComponent } from './team-badminton/team-badminton.component';

const routes: Routes = [
  {
    path:'',
    component:BadmintonComponent,
    children:[
      {
        path:'team',
        component:TeamBadmintonComponent
      },
      {
        path:'informasi',
        component:InfoBadmintonComponent
      },
      {
        path:'bracket',
        component:BracketBadmintonComponent
      },
      {
        path:'daftar',
        component:RegisterBadmintonComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadmintonRoutingModule { }
