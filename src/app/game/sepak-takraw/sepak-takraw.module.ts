import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SepakTakrawRoutingModule } from './sepak-takraw-routing.module';
import { BracketComponent } from './bracket/bracket.component';
import { DaftarComponent } from './daftar/daftar.component';
import { InformasiComponent } from './informasi/informasi.component';
import { PesertaComponent } from './peserta/peserta.component';


@NgModule({
  declarations: [BracketComponent, DaftarComponent, InformasiComponent, PesertaComponent],
  imports: [
    CommonModule,
    SepakTakrawRoutingModule
  ]
})
export class SepakTakrawModule { }
