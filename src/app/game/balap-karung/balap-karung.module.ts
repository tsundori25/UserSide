import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalapKarungRoutingModule } from './balap-karung-routing.module';
import { BalapKarungComponent } from './balap-karung.component';
import { RegisterBalapkarungComponent } from './register-balapkarung/register-balapkarung.component';
import { TeamBalapkarungComponent } from './team-balapkarung/team-balapkarung.component';
import { InfoBalapkarungComponent } from './info-balapkarung/info-balapkarung.component';
import { BracketBalapkarungComponent } from './bracket-balapkarung/bracket-balapkarung.component';
import { BalapkarungTeam1Component } from './team/balapkarung-team1/balapkarung-team1.component';
import { BalapkarungTeam2Component } from './team/balapkarung-team2/balapkarung-team2.component';
import { BalapkarungTeam3Component } from './team/balapkarung-team3/balapkarung-team3.component';
import { BalapkarungTeam4Component } from './team/balapkarung-team4/balapkarung-team4.component';
import { BalapkarungTeam5Component } from './team/balapkarung-team5/balapkarung-team5.component';
import { BalapkarungTeam6Component } from './team/balapkarung-team6/balapkarung-team6.component';
import { BalapkarungTeam7Component } from './team/balapkarung-team7/balapkarung-team7.component';
import { BalapkarungTeam8Component } from './team/balapkarung-team8/balapkarung-team8.component';
import { BalapkarungTeam9Component } from './team/balapkarung-team9/balapkarung-team9.component';
import { BalapkarungTeam10Component } from './team/balapkarung-team10/balapkarung-team10.component';

@NgModule({
  declarations: [
    BalapKarungComponent,
    RegisterBalapkarungComponent,
    TeamBalapkarungComponent,
    InfoBalapkarungComponent,
    BracketBalapkarungComponent,
    BalapkarungTeam1Component,
    BalapkarungTeam2Component,
    BalapkarungTeam3Component,
    BalapkarungTeam4Component,
    BalapkarungTeam5Component,
    BalapkarungTeam6Component,
    BalapkarungTeam7Component,
    BalapkarungTeam8Component,
    BalapkarungTeam9Component,
    BalapkarungTeam10Component,
  ],
  imports: [
    CommonModule,
    BalapKarungRoutingModule
  ]
})
export class BalapKarungModule { }
