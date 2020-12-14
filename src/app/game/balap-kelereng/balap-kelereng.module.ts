import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalapKelerengRoutingModule } from './balap-kelereng-routing.module';
import { BalapKelerengComponent } from './balap-kelereng.component';
import { RegisterBalapkelerengComponent } from './register-balapkelereng/register-balapkelereng.component';
import { TeamBalapkelerengComponent } from './team-balapkelereng/team-balapkelereng.component';
import { InfoBalapkelerengComponent } from './info-balapkelereng/info-balapkelereng.component';
import { BracketBalapkelerengComponent } from './bracket-balapkelereng/bracket-balapkelereng.component';
import { BalapkelerengTeam1Component } from './team/balapkelereng-team1/balapkelereng-team1.component';
import { BalapkelerengTeam2Component } from './team/balapkelereng-team2/balapkelereng-team2.component';
import { BalapkelerengTeam3Component } from './team/balapkelereng-team3/balapkelereng-team3.component';
import { BalapkelerengTeam4Component } from './team/balapkelereng-team4/balapkelereng-team4.component';
import { BalapkelerengTeam5Component } from './team/balapkelereng-team5/balapkelereng-team5.component';
import { BalapkelerengTeam6Component } from './team/balapkelereng-team6/balapkelereng-team6.component';
import { BalapkelerengTeam7Component } from './team/balapkelereng-team7/balapkelereng-team7.component';
import { BalapkelerengTeam8Component } from './team/balapkelereng-team8/balapkelereng-team8.component';
import { BalapkelerengTeam9Component } from './team/balapkelereng-team9/balapkelereng-team9.component';
import { BalapkelerengTeam10Component } from './team/balapkelereng-team10/balapkelereng-team10.component';


@NgModule({
  declarations: [
    BalapKelerengComponent,
    RegisterBalapkelerengComponent,
    TeamBalapkelerengComponent,
    InfoBalapkelerengComponent,
    BracketBalapkelerengComponent,
    BalapkelerengTeam1Component,
    BalapkelerengTeam2Component,
    BalapkelerengTeam3Component,
    BalapkelerengTeam4Component,
    BalapkelerengTeam5Component,
    BalapkelerengTeam6Component,
    BalapkelerengTeam7Component,
    BalapkelerengTeam8Component,
    BalapkelerengTeam9Component,
    BalapkelerengTeam10Component,
  ],
  imports: [
    CommonModule,
    BalapKelerengRoutingModule
  ]
})
export class BalapKelerengModule { }
