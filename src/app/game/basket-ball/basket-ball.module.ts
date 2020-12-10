import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketBallRoutingModule } from './basket-ball-routing.module';
import { InformasiComponent } from './informasi/informasi.component';
import { BasketBallComponent } from './basket-ball.component';
import { RegisterBasketballComponent } from './register-basketball/register-basketball.component';
import { TeamBasketballComponent } from './team-basketball/team-basketball.component';

@NgModule({
  declarations: [
    BasketBallComponent,
    InformasiComponent,
    RegisterBasketballComponent,
    TeamBasketballComponent,
  ],
  imports: [
    CommonModule,
    BasketBallRoutingModule
  ]
})
export class BasketBallModule { }
