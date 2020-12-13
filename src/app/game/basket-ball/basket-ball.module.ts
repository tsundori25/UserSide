import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketBallRoutingModule } from './basket-ball-routing.module';
import { BasketBallComponent } from './basket-ball.component';
import { RegisterBasketballComponent } from './register-basketball/register-basketball.component';
import { TeamBasketballComponent } from './team-basketball/team-basketball.component';
import { InfoBasketballComponent } from './info-basketball/info-basketball.component';
import { BracketBasketballComponent } from './bracket-basketball/bracket-basketball.component';

@NgModule({
  declarations: [
    BasketBallComponent,
    RegisterBasketballComponent,
    TeamBasketballComponent,
    InfoBasketballComponent,
    BracketBasketballComponent,
  ],
  imports: [
    CommonModule,
    BasketBallRoutingModule
  ]
})
export class BasketBallModule { }
