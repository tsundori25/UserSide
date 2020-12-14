import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakanKerupukRoutingModule } from './makan-kerupuk-routing.module';
import { MakanKerupukComponent } from './makan-kerupuk.component';
import { RegisterMakankerupukComponent } from './register-makankerupuk/register-makankerupuk.component';
import { TeamMakankerupukComponent } from './team-makankerupuk/team-makankerupuk.component';
import { InfoMakankerupukComponent } from './info-makankerupuk/info-makankerupuk.component';
import { BracketMakankerupukComponent } from './bracket-makankerupuk/bracket-makankerupuk.component';
import { MakankerupukTeam1Component } from './team/makankerupuk-team1/makankerupuk-team1.component';
import { MakankerupukTeam2Component } from './team/makankerupuk-team2/makankerupuk-team2.component';
import { MakankerupukTeam3Component } from './team/makankerupuk-team3/makankerupuk-team3.component';
import { MakankerupukTeam4Component } from './team/makankerupuk-team4/makankerupuk-team4.component';
import { MakankerupukTeam5Component } from './team/makankerupuk-team5/makankerupuk-team5.component';
import { MakankerupukTeam6Component } from './team/makankerupuk-team6/makankerupuk-team6.component';
import { MakankerupukTeam7Component } from './team/makankerupuk-team7/makankerupuk-team7.component';
import { MakankerupukTeam8Component } from './team/makankerupuk-team8/makankerupuk-team8.component';
import { MakankerupukTeam9Component } from './team/makankerupuk-team9/makankerupuk-team9.component';
import { MakankerupukTeam10Component } from './team/makankerupuk-team10/makankerupuk-team10.component';


@NgModule({
  declarations: [
    MakanKerupukComponent,
    RegisterMakankerupukComponent,
    TeamMakankerupukComponent,
    InfoMakankerupukComponent,
    BracketMakankerupukComponent,
    MakankerupukTeam1Component,
    MakankerupukTeam2Component,
    MakankerupukTeam3Component,
    MakankerupukTeam4Component,
    MakankerupukTeam5Component,
    MakankerupukTeam6Component,
    MakankerupukTeam7Component,
    MakankerupukTeam8Component,
    MakankerupukTeam9Component,
    MakankerupukTeam10Component,
  ],
  imports: [
    CommonModule,
    MakanKerupukRoutingModule
  ]
})
export class MakanKerupukModule { }
