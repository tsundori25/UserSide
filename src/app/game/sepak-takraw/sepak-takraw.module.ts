import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SepakTakrawRoutingModule } from './sepak-takraw-routing.module';
import { SepakTakrawComponent } from './sepak-takraw.component';
import { RegisterSepaktakrawComponent } from './register-sepaktakraw/register-sepaktakraw.component';
import { TeamSepaktakrawComponent } from './team-sepaktakraw/team-sepaktakraw.component';
import { InfoSepaktakrawComponent } from './info-sepaktakraw/info-sepaktakraw.component';
import { BracketSepaktakrawComponent } from './bracket-sepaktakraw/bracket-sepaktakraw.component';
import { SepaktakrawTeam1Component } from './team/sepaktakraw-team1/sepaktakraw-team1.component';
import { SepaktakrawTeam2Component } from './team/sepaktakraw-team2/sepaktakraw-team2.component';
import { SepaktakrawTeam3Component } from './team/sepaktakraw-team3/sepaktakraw-team3.component';
import { SepaktakrawTeam4Component } from './team/sepaktakraw-team4/sepaktakraw-team4.component';
import { SepaktakrawTeam5Component } from './team/sepaktakraw-team5/sepaktakraw-team5.component';
import { SepaktakrawTeam6Component } from './team/sepaktakraw-team6/sepaktakraw-team6.component';
import { SepaktakrawTeam7Component } from './team/sepaktakraw-team7/sepaktakraw-team7.component';
import { SepaktakrawTeam8Component } from './team/sepaktakraw-team8/sepaktakraw-team8.component';
import { SepaktakrawTeam9Component } from './team/sepaktakraw-team9/sepaktakraw-team9.component';
import { SepaktakrawTeam10Component } from './team/sepaktakraw-team10/sepaktakraw-team10.component';

@NgModule({
  declarations: [
    SepakTakrawComponent,
    RegisterSepaktakrawComponent,
    TeamSepaktakrawComponent,
    InfoSepaktakrawComponent,
    BracketSepaktakrawComponent,
    SepaktakrawTeam1Component,
    SepaktakrawTeam2Component,
    SepaktakrawTeam3Component,
    SepaktakrawTeam4Component,
    SepaktakrawTeam5Component,
    SepaktakrawTeam6Component,
    SepaktakrawTeam7Component,
    SepaktakrawTeam8Component,
    SepaktakrawTeam9Component,
    SepaktakrawTeam10Component,
  ],
  imports: [
    CommonModule,
    SepakTakrawRoutingModule
  ]
})
export class SepakTakrawModule { }
