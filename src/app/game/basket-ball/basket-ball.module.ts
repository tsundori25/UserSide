import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketBallRoutingModule } from './basket-ball-routing.module';
import { BasketBallComponent } from './basket-ball.component';
import { RegisterBasketballComponent } from './register-basketball/register-basketball.component';
import { TeamBasketballComponent } from './team-basketball/team-basketball.component';
import { InfoBasketballComponent } from './info-basketball/info-basketball.component';
import { BracketBasketballComponent } from './bracket-basketball/bracket-basketball.component';
import { BasketballTeam1Component } from './team/basketball-team1/basketball-team1.component';
import { BasketballTeam2Component } from './team/basketball-team2/basketball-team2.component';
import { BasketballTeam3Component } from './team/basketball-team3/basketball-team3.component';
import { BasketballTeam4Component } from './team/basketball-team4/basketball-team4.component';
import { BasketballTeam5Component } from './team/basketball-team5/basketball-team5.component';
import { BasketballTeam6Component } from './team/basketball-team6/basketball-team6.component';
import { BasketballTeam7Component } from './team/basketball-team7/basketball-team7.component';
import { BasketballTeam8Component } from './team/basketball-team8/basketball-team8.component';
import { BasketballTeam9Component } from './team/basketball-team9/basketball-team9.component';
import { BasketballTeam10Component } from './team/basketball-team10/basketball-team10.component';

@NgModule({
  declarations: [
    BasketBallComponent,
    RegisterBasketballComponent,
    TeamBasketballComponent,
    InfoBasketballComponent,
    BracketBasketballComponent,
    BasketballTeam1Component,
    BasketballTeam2Component,
    BasketballTeam3Component,
    BasketballTeam4Component,
    BasketballTeam5Component,
    BasketballTeam6Component,
    BasketballTeam7Component,
    BasketballTeam8Component,
    BasketballTeam9Component,
    BasketballTeam10Component,
  ],
  imports: [
    CommonModule,
    BasketBallRoutingModule
  ]
})
export class BasketBallModule { }
