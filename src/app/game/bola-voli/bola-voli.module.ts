import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BolaVoliRoutingModule } from './bola-voli-routing.module';
import { BolaVoliComponent } from './bola-voli.component';
import { RegisterBolavoliComponent } from './register-bolavoli/register-bolavoli.component';
import { TeamBolavoliComponent } from './team-bolavoli/team-bolavoli.component';
import { InfoBolavoliComponent } from './info-bolavoli/info-bolavoli.component';
import { BracketBolavoliComponent } from './bracket-bolavoli/bracket-bolavoli.component';
import { BolavoliTeam1Component } from './team/bolavoli-team1/bolavoli-team1.component';
import { BolavoliTeam2Component } from './team/bolavoli-team2/bolavoli-team2.component';
import { BolavoliTeam3Component } from './team/bolavoli-team3/bolavoli-team3.component';
import { BolavoliTeam4Component } from './team/bolavoli-team4/bolavoli-team4.component';
import { BolavoliTeam5Component } from './team/bolavoli-team5/bolavoli-team5.component';
import { BolavoliTeam6Component } from './team/bolavoli-team6/bolavoli-team6.component';
import { BolavoliTeam7Component } from './team/bolavoli-team7/bolavoli-team7.component';
import { BolavoliTeam8Component } from './team/bolavoli-team8/bolavoli-team8.component';
import { BolavoliTeam9Component } from './team/bolavoli-team9/bolavoli-team9.component';
import { BolavoliTeam10Component } from './team/bolavoli-team10/bolavoli-team10.component';


@NgModule({
  declarations: [
    BolaVoliComponent,
    RegisterBolavoliComponent,
    TeamBolavoliComponent,
    InfoBolavoliComponent,
    BracketBolavoliComponent,
    BolavoliTeam1Component,
    BolavoliTeam2Component,
    BolavoliTeam3Component,
    BolavoliTeam4Component,
    BolavoliTeam5Component,
    BolavoliTeam6Component,
    BolavoliTeam7Component,
    BolavoliTeam8Component,
    BolavoliTeam9Component,
    BolavoliTeam10Component,
  ],
  imports: [
    CommonModule,
    BolaVoliRoutingModule
  ]
})
export class BolaVoliModule { }
