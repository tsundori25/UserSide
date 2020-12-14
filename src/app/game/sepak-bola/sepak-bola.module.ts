import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SepakBolaRoutingModule } from './sepak-bola-routing.module';
import { SepakBolaComponent } from './sepak-bola.component';
import { RegisterSepakbolaComponent } from './register-sepakbola/register-sepakbola.component';
import { TeamSepakbolaComponent } from './team-sepakbola/team-sepakbola.component';
import { InfoSepakbolaComponent } from './info-sepakbola/info-sepakbola.component';
import { BracketSepakbolaComponent } from './bracket-sepakbola/bracket-sepakbola.component';
import { SepakbolaTeam1Component } from './team/sepakbola-team1/sepakbola-team1.component';
import { SepakbolaTeam2Component } from './team/sepakbola-team2/sepakbola-team2.component';
import { SepakbolaTeam3Component } from './team/sepakbola-team3/sepakbola-team3.component';
import { SepakbolaTeam4Component } from './team/sepakbola-team4/sepakbola-team4.component';
import { SepakbolaTeam5Component } from './team/sepakbola-team5/sepakbola-team5.component';
import { SepakbolaTeam6Component } from './team/sepakbola-team6/sepakbola-team6.component';
import { SepakbolaTeam7Component } from './team/sepakbola-team7/sepakbola-team7.component';
import { SepakbolaTeam8Component } from './team/sepakbola-team8/sepakbola-team8.component';
import { SepakbolaTeam9Component } from './team/sepakbola-team9/sepakbola-team9.component';
import { SepakbolaTeam10Component } from './team/sepakbola-team10/sepakbola-team10.component';

@NgModule({
  declarations: [
    SepakBolaComponent,
    RegisterSepakbolaComponent,
    TeamSepakbolaComponent,
    InfoSepakbolaComponent,
    BracketSepakbolaComponent,
    SepakbolaTeam1Component,
    SepakbolaTeam2Component,
    SepakbolaTeam3Component,
    SepakbolaTeam4Component,
    SepakbolaTeam5Component,
    SepakbolaTeam6Component,
    SepakbolaTeam7Component,
    SepakbolaTeam8Component,
    SepakbolaTeam9Component,
    SepakbolaTeam10Component,
  ],
  imports: [
    CommonModule,
    SepakBolaRoutingModule
  ]
})
export class SepakBolaModule { }
