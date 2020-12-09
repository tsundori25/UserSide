import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SepaktakrawRoutingModule } from './sepaktakraw-routing.module';
import { SepaktakrawComponent } from './sepaktakraw.component';
import { BracketComponent } from '../basket/bracket/bracket.component';
import { DaftarComponent } from '../basket/daftar/daftar.component';
import { InformasiComponent } from '../basket/informasi/informasi.component';
import { PesertaComponent } from '../basket/peserta/peserta.component';


@NgModule({
  declarations: [SepaktakrawComponent, BracketComponent, DaftarComponent,InformasiComponent, PesertaComponent],
  imports: [
    CommonModule,
    SepaktakrawRoutingModule
  ]
})
export class SepaktakrawModule { }
