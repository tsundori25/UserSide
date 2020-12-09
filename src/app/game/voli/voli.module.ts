import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoliRoutingModule } from './voli-routing.module';
import { VoliComponent } from './voli.component';
import { BracketComponent } from '../basket/bracket/bracket.component';
import { DaftarComponent } from '../basket/daftar/daftar.component';
import { InformasiComponent } from '../basket/informasi/informasi.component';
import { PesertaComponent } from '../basket/peserta/peserta.component';


@NgModule({
  declarations: [VoliComponent, BracketComponent, DaftarComponent, InformasiComponent, PesertaComponent],
  imports: [
    CommonModule,
    VoliRoutingModule
  ]
})
export class VoliModule { }
