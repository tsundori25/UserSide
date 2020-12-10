import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SepakTakrawRoutingModule } from './sepak-takraw-routing.module';
import { InformasiComponent } from './informasi/informasi.component';
import { SepakTakrawComponent } from './sepak-takraw.component';
import { RegisterSepaktakrawComponent } from './register-sepaktakraw/register-sepaktakraw.component';
import { TeamSepaktakrawComponent } from './team-sepaktakraw/team-sepaktakraw.component';

@NgModule({
  declarations: [
    SepakTakrawComponent,
    InformasiComponent,
    RegisterSepaktakrawComponent,
    TeamSepaktakrawComponent,
  ],
  imports: [
    CommonModule,
    SepakTakrawRoutingModule
  ]
})
export class SepakTakrawModule { }
