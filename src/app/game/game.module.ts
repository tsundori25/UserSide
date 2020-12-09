import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { BadmintonComponent } from './badminton/badminton.component';
import { BalapkarungComponent } from './balapkarung/balapkarung.component';
import { BalapkelerengComponent } from './balapkelereng/balapkelereng.component';
import { BasketComponent } from './basket/basket.component';
import { MakankerupukComponent } from './makankerupuk/makankerupuk.component';
import { SepakbolaComponent } from './sepakbola/sepakbola.component';
import { SepaktakrawComponent } from './sepaktakraw/sepaktakraw.component';
import { VoliComponent } from './voli/voli.component';


@NgModule({
  declarations: [BadmintonComponent,BalapkarungComponent,BalapkelerengComponent,BasketComponent,MakankerupukComponent,SepakbolaComponent,SepaktakrawComponent,VoliComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
