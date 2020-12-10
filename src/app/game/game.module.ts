import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { BadmintonComponent } from './badminton/badminton.component';
import { InformasiComponent } from './badminton/informasi/informasi.component';
import { BalapKarungComponent } from './balap-karung/balap-karung.component';
import { MakanKerupukComponent } from './makan-kerupuk/makan-kerupuk.component';
import { SepakBolaComponent } from './sepak-bola/sepak-bola.component';
import { SepakTakrawComponent } from './sepak-takraw/sepak-takraw.component';
import { BolaVoliComponent } from './bola-voli/bola-voli.component';
import { BalapKelerengComponent } from './balap-kelereng/balap-kelereng.component';
import { BasketBallComponent } from './basket-ball/basket-ball.component';

@NgModule({
  declarations: [
    BadmintonComponent,
    InformasiComponent,
    BalapKarungComponent,
    MakanKerupukComponent,
    SepakBolaComponent,
    SepakTakrawComponent,
    BolaVoliComponent,
    BalapKelerengComponent,
    BasketBallComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
