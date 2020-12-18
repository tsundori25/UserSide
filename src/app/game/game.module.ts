import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentComponent } from './tournament/tournament.component';
import { BadmintonComponent } from './badminton/badminton.component';
import { BasketComponent } from './basket/basket.component';
import { SepakbolaComponent } from './sepakbola/sepakbola.component';
import { TeamComponent } from './badminton/team/team.component';
import { InformasiComponent } from './badminton/informasi/informasi.component';
import { MakankerupukComponent } from './makankerupuk/makankerupuk.component';
import { BalapkelerengComponent } from './balapkelereng/balapkelereng.component';
import { BolavoliComponent } from './bolavoli/bolavoli.component';
import { SepaktakrawComponent } from './sepaktakraw/sepaktakraw.component';
import { PanjatpinangComponent } from './panjatpinang/panjatpinang.component';
import { BalapkarungComponent } from './balapkarung/balapkarung.component';
import { MancingComponent } from './mancing/mancing.component';

@NgModule({
  declarations: [TournamentComponent, BadmintonComponent, BasketComponent, SepakbolaComponent, TeamComponent, InformasiComponent, MakankerupukComponent, BalapkelerengComponent, BolavoliComponent, SepaktakrawComponent, PanjatpinangComponent, BalapkarungComponent, MancingComponent],
  imports: [CommonModule],
})
export class GameModule {}
