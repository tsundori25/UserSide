import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SepakTakrawRoutingModule } from './sepak-takraw-routing.module';
import { SepakTakrawComponent } from './sepak-takraw.component';
import { RegisterSepaktakrawComponent } from './register-sepaktakraw/register-sepaktakraw.component';
import { TeamSepaktakrawComponent } from './team-sepaktakraw/team-sepaktakraw.component';
import { InfoSepaktakrawComponent } from './info-sepaktakraw/info-sepaktakraw.component';
import { BracketSepaktakrawComponent } from './bracket-sepaktakraw/bracket-sepaktakraw.component';

@NgModule({
  declarations: [
    SepakTakrawComponent,
    RegisterSepaktakrawComponent,
    TeamSepaktakrawComponent,
    InfoSepaktakrawComponent,
    BracketSepaktakrawComponent,
  ],
  imports: [
    CommonModule,
    SepakTakrawRoutingModule
  ]
})
export class SepakTakrawModule { }
